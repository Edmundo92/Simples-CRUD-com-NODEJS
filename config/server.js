module.exports = function(){

var express = require('express');
var bodyParser = require('body-parser');
var web = require('../app/routes/web');
var expressValidator = require('express-validator');

var app = express();



//configurando o ejs para trabalhar com o node
app.set('view engine', 'ejs');

//config body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(expressValidator()); 

//inf para o projecto que determinada pasta está nesse destino
app.set('views', './app/views');

web(app);

app.listen(8000, function(){
    console.log("localhost:8000");
});

};