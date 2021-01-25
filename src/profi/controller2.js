const db = require("./../config/sequelize")
const Profi = require("./model")
const { Op } = require("sequelize")


exports.findAll = (req,res)=>{
    
    let te = req.body
    Profi.findAll({where: {[Op.and]: [{ nome: te.nome },{ senha: te.senha }]}}).then(profis=>{
        res.send(profis)
    }).then((profi) => {
        res.send(profi)
    }).catch((err)=>{
        console.log('deu erro')
        console.error('Unable to connect to the database:', err)
    })
}