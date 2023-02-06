const chalk = require('chalk');
const Tarea = require('./tarea')

class Tareas{
    constructor(){
        this._listado = {};
    }

    creaTarea(desc = '', comp = null){
        if(comp===null){
            let comp = 'Pendiente'
            const tarea = new Tarea(desc,comp);
            this._listado[tarea.id] = tarea;
        }
    }

    cargarTareas(json = []){
        json.map(tarea=>{
            this._listado[tarea.id] = tarea
        })
        return json;
    }

    listadoCompleto(){
        // let i = 0;
        // let resultado;
        // let listado = this.listadoArr.map(e=>{
        //     return e.desc
        // })
        // for(let i = 1; i<=listado.length; i++){
        //     resultado = console.log(`${i} ${listado[i-1]}`);
        // }
        // return resultado
        let listado = this.listadoArr.map((tarea,i)=>{
            chalk.green`${i+1}`;
            const {desc, completadoEn} = tarea
            const estado = ( completadoEn )
                ?chalk.green('Completada')
                :chalk.red('Pendiente')
            return console.log(`${chalk.green(i)} ${desc} : ${estado}`)
        })
    }


    listarCompletadas(){
        let i = 0;
        let listado = this.listadoArr.map(tarea=>{
            const {desc, completadoEn} = tarea;
            const estado = ( completadoEn )
                ?chalk.green('Completada')
                :chalk.red('Pendiente')
            if(completadoEn){
                 i+=1;
                 console.log(`${chalk.green(i)} ${desc} : ${estado}: ${completadoEn}\n`)
            }
        })
        return listado
    }



    listarNoCompletadas(){
        let i = 0;
        let listado = this.listadoArr.map(tarea=>{
            const {desc, completadoEn} = tarea;
            const estado = ( completadoEn )
                ?chalk.green('Completada')
                :chalk.red('Pendiente')
            if(!completadoEn){
                 i+=1;
                 console.log(`${chalk.green(i)} ${desc} : ${estado}\n`)
            }
        })
        return listado
    }

    borrarTarea( id = '' ){
        if(this._listado[id]){
            delete this._listado[id];
        }
    }


    toggleCompletadas(ids =[]){

        const IDS = ids.map(id=>{
            const tarea = this._listado[id];
            if( !tarea.completadoEn ){
                tarea.completadoEn = new Date().toISOString();
            }
        }) 
        const include = this.listadoArr.map(tarea=>{
            if ( !ids.includes(tarea.id)) {
                tarea.completadoEn = null;
            }
        })
    }




    get listadoArr(){
        const listado = [];
        Object.keys(this._listado).map(key=>{
            const tarea = this._listado[key]
            listado.push( tarea )
        })

        return listado;
    }

}

module.exports = Tareas;