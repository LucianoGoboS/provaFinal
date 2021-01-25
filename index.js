require("dotenv-safe").config()
var jwt = require('jsonwebtoken')
const express = require('express')
const app = express()


const bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
const db = require('./src/config/sequelize')

app.use(bodyParser.json())
app.use(cookieParser()) 
app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

db.sequelize.sync({alter: true}).then(()=>{
    console.log('deu certo a criacao do banco (DROP E/OU CREATE)')
})
/*
db.sequelize.sync({alter: true}).then(()=>{
    console.log('deu certo a criacao do banco (DROP E/OU CREATE)')
})
*/
require('./src/user/routers')(app)
require('./src/profi/routes')(app)
require('./src/material/routes')(app)
require('./src/pedido/routes')(app)
require('./src/pedmat/routes')(app)

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/views/index3.html")
})

app.get("/empresa", verifyJWT,(req,res)=>{
    res.sendFile(__dirname + "/public/views/index2.html")
});

app.get("/cliente",(req,res)=>{
    res.sendFile(__dirname + "/public/views/cliente.html")
});

app.get("/alterar_cliente",(req,res)=>{
    res.sendFile(__dirname + "/public/views/alterarCliente.html")
});

app.get("/RH",(req,res)=>{
    res.sendFile(__dirname + "/public/views/RH.html")
});

app.get("/teste",(req,res)=>{
    res.sendFile(__dirname + "/public/views/teste.html")
});

app.get('/vendas', verifyJWT, (req, res, next) => { 
    res.sendFile(__dirname + "/public/views/vendas.html")
  }) 



 /* var apiRoute = express.Router()

  apiRoute.use(function(req, res, next) {
    var token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    console.log('teste da autenticação'+token)
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
  })

  app.use('/teste2', apiRoute)*/

  function verifyJWT(req, res, next){
   // var token = req.headers['x-access-token'];  
   var token = req.body.token || req.query.token || req.headers['x-access-token'] 
    console.log('acabou de passar agora '+JSON.stringify(token))
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}  


var server = app.listen(3000,()=>{
    console.log('Servidor rodando na porta ' + server.address.port + 'no host ' + server.address().address)
})