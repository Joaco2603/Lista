const inquirer = require('inquirer');
const chalk = require('chalk');
const Tarea = require('../models/tarea');

const preguntas = [
    {
        type: 'list',
        name: 'opcion',
        message: "Que desea hacer?",
        choices: [
            {
                value:  1,
                name: chalk.green('1.')+'Crear Tarea'
            },
            {
                value: 2,
                name: chalk.green('2.')+'Listar Tarea'
            },
            {
                value: 3,
                name: chalk.green('3.')+'Listar Tareas completadas' 
            },
            {
                value: 4,
                name: chalk.green('4.')+'Listar Tareas Pendientes'
            },
            {
                value: 5,
                name: chalk.green('5.')+'Completar Tareas'
            },
            {
                value: 6,
                name: chalk.green('6.')+'Borrar Tareas'
            },
            {
                value: 0,
                name: chalk.red('0. Salir')
            },
        ]
    }
]


const inquireMenu = async()=>{
    console.clear();
    console.clear();
    console.log(chalk.green("Seleccione uan opcion\n"));

    const { opcion } = await inquirer.prompt(preguntas)

    return opcion;
}

// const pausa = ()=>{

//     return new Promise(resolve=>{

//         const readline = require("readline").createInterface({
//             input: process.stdin,
//             output: process.stdout
//         })

//         readline.question('\nPresione Enter para continuar \n', (opt)=>{
//             readline.close();
//             resolve();
//         })
//     })
// }

const pausa = async()=>{
    const q = 
    [
        {
            type: 'input',
            name: 'enter',
            message: 'Presione'+chalk.green(` ENTER `)+'para continuar'
        }
    ];


    await inquirer.prompt(q);
}


const leerInput = async(message)=>{
    const preguntas = [
        {
            type: 'input',
            name:  'desc',
            // message: messages
            message,
            validate(value){
              if(value.length === 0){
                return 'Por favor ingrese un valor'
              }  
              return true;
            }
        }
    ]

   
    // const {desc} = await inquirer.prompt(preguntas);
    const {desc} = await inquirer.prompt(preguntas);
    return desc; 

}

const listadoBorrar = async(tarea =  [])=>{
    
    const choices = tarea.map( (tarea,i) =>{
        const idx = chalk.green(`${i+1}`);
        return{
            value:tarea.id,
            name: `${idx} ${tarea.desc}`,
        }
    })

    choices.unshift({
        value: '0',
        name: chalk.red('0. '+'Cancelar')
    })

    const preguntas = [
        {
            type: 'list',
            name: 'id',
            message: 'Borrar',
            choices
        }
    ]
    const {id} = await inquirer.prompt(preguntas);
    return id;
}

const confirmar = async(message)=>{
    
    const preguntas = [
        {
            type: 'confirm',
            name: 'ok',
            message
        }
    ];

    const { ok } = await inquirer.prompt(preguntas);
    return ok;
}


const mostrarListadoCheckList = async(tarea =  [])=>{
    
    const choices = tarea.map( (tarea,i) =>{
        const idx = chalk.green(`${i+1}`);
        return{
            value:tarea.id,
            name: `${idx} ${tarea.desc}`,
            checked: (tarea.compleadoEn)?true:false
        }
    })

    const preguntas = [
        {
            type: 'checkbox',
            name: 'ids',
            message: 'Seleccione',
            choices
        }
    ]
    const {ids} = await inquirer.prompt(preguntas);
    console.log(ids);
    return ids;
}



module.exports ={
    inquireMenu,
    pausa,
    leerInput,
    listadoBorrar,
    confirmar,
    mostrarListadoCheckList
}