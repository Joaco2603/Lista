const { v4 } = require('uuid');

class Tarea{
    constructor( desc ){
        this.id = v4();
        this.desc = desc;
        this.completadoEn = null;
    }
}

module.exports = Tarea