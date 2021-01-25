const db = require('./../config/sequelize')
const Material = require('./model')
const { Op } = require("sequelize")

exports.findOne = (req,res)=>{
    
    let te = req.body
    console.log(te.nome)
    Material.findAll({ where: {nome:{[Op.like] : '%' + te.nome + '%' }}}).then(materiais=>{        
        res.send(materiais)
    })
}