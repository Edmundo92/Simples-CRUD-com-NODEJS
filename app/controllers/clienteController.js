

var clienteModel = require('../models/clienteModel')();

module.exports.index = function(req, res){
    clienteModel.all(function(erro, result){
        res.render('site/home', {clientes: result, erros:{}, dados:{}}); 
    });
};

module.exports.delete = function(){
    
};
 
module.exports.show = function(req,res){
    clienteModel.find(req.params.id,function(erro,result){
      if(resultado[0] && !erro){
        res.render('site/detalhe',{cliente:result[0]});
      }else{
        console.log("Esse cliente não existe");
        res.redirect('/');
      } 
  
    });
};

//config form
module.exports.store = function(req, res){
  var dados = req.body;

  //validar os dados inseridos
  req.assert('nome', 'Preencha corretamente o campo Nome').notEmpty();
  req.assert('email', 'Preencha corretamente o campo Email').notEmpty();

  req.assert('nome', 'Deve ter de 3 a 20 caracteres').len(3, 20);
  req.assert('email', 'Preencha com um email válido').isEmail();

  var validacaoErros = req.validationErrors();
  if(validacaoErros){
    console.log(validacaoErros);
    clienteModel.all(function(erro, result){
      res.render('site/home', {clientes: result, erros:validacaoErros, dados:dados}); 
    });
    return; 
  }

  clienteModel.save(dados, function(erro, result){
      if(!erro){
        res.redirect('/');
      }else{
        console.log("Erro ao adicionar o cliente");
        res.redirect('/')
      }
  }); 
};