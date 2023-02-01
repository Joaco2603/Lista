const chalk = require('chalk');

const mostrarMenu = ()=>{

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

    readline.question('Seleccione una opcion: ', (opt)=>{
        console.log(opt);
        readline.close();
    })
}

module.exports ={
    mostrarMenu
}