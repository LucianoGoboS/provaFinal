const db = require("./../config/sequelize")
const User = require("./model")
const { Op } = require("sequelize")

exports.findAll = (req,res)=>{
    
    let te = req.body
    User.findAll({where: {cpf: te.cpf}}).then(users=>{
        res.send(users)
    }).then((user) => {
        res.send(user)
    }).catch((err)=>{
        console.log('deu erro')
        console.error('Unable to connect to the database:', err)
    })
}