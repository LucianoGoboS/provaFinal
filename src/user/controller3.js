const db = require("./../config/sequelize")
const User = require("./model")

exports.findAll = (req,res)=>{
    
    let te = req.body
    console.log(JSON.stringify(te))
    User.findAll({where: {cpf: te.cpf}}).then(users=>{
        res.send(users)
    })
}