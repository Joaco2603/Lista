require("chalk");
// const { mostrarMenu, pausa } = require('./helpers/mensajes')
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
const { inquireMenu
    ,pausa
    ,leerInput, 
    listadoBorrar,
    confirmar,
    mostrarListadoCheckList}= require('./helpers/inquirer');
const  {guardarDB, leerDB}  = require("./helpers/guardarArchivo");

const main = async()=>{
    console.clear();

    let opt;
    const tareas = new Tareas();
    const tareasDB = leerDB();
    if(tareasDB){
        tareas.cargarTareas(tareasDB);
    }



    do{
        //Imprimir el menu
        opt = await inquireMenu();
        switch (opt) {
            case 1:
                const desc = await leerInput('Descripcion:');
                tareas.creaTarea( desc );
                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listarCompletadas();
                break;
            case 4:
                tareas.listarNoCompletadas();
                break;
            case 5:
                const ids = await mostrarListadoCheckList(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                break;
            case 6:
                const id = await listadoBorrar( tareas.listadoArr);
                const ok = await confirmar('Estas seguro?')
                console.log({ok})
                if(ok){
                    tareas.borrarTarea(id);
                    console.log('Tarea borrada correctamente')
                }
                break;
        
            default:
                break;
        }

        guardarDB( tareas.listadoArr );
        
        if(opt == 0 )console.log('Gracias por utilizar nuestra app');
        await pausa();
    }while(opt!=0)
    
    
    
}


main();