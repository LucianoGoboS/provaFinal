const db = require("./../config/sequelize")
const Profi = require("./model")
const { Op } = require("sequelize")
require("dotenv-safe").config()
var jwt = require('jsonwebtoken')

exports.Token = (req,res)=>{

          console.log('passou por aqui 123')
          let te = req.body
          var id=te.id
         //esse id viria do banco de dados
          var token = jwt.sign({ id }, process.env.SECRET, {
            expiresIn: 300 // expires in 5min
          });
          res.status(200).send({ auth: true, token: token })
   //       res.json({ auth: true, token: token })
  //  res.set({
  //    'Authorization': token
  //  })
     //     res.redirect("/teste2")
}