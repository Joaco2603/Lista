const chalk = require('chalk');




const mostrarMenu = ()=>{

    return new Promise(resolve=>{

        console.clear();
        console.log(chalk.green("Seleccione uan opcion\n"));
    
        console.log(chalk.green`1.` + `Crear Tareas`);
        console.log(chalk.green`2.` + `Listar Tareas`);
        console.log(chalk.green`3.` + `Listar Tareas Completadas`);
        console.log(chalk.green`4.` + `Listar Tareas Pendientes`);
        console.log(chalk.green`5.` + `Completar Tareas`);
        console.log(chalk.green`6.` + `Borrar Tareas`);
        console.log(chalk.green`0.` + `salir\n`);

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    
        readline.question('Seleccione una opcion para continuar \n', (opt)=>{
            readline.close();
            console.log(opt);
            return resolve(opt)
        })
    
    })

}

const pausa = ()=>{

    return new Promise(resolve=>{

        const readline = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })

        readline.question('\nPresione Enter para continuar \n', (opt)=>{
            readline.close();
            resolve();
        })
    })
}

module.exports ={
    mostrarMenu,
    pausa
}