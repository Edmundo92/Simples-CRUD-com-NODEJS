var db = require('../../config/db');


module.exports = function(){
    this.all = function(retorno){
        var con = db();
        return con.query('SELECT * FROM clientes', retorno);
    };

    this.find = function(id, retorno){   
        var con = db();
        return con.query('SELECT * FROM clientes where id = ?', id, retorno);
    };

    //conf form
    this.save = function(dados, retorno){   
        var con = db();
        return con.query('insert into clientes set ?', dados, retorno);
    };

    return this;
}; 