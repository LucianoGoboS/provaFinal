const db = require('./../config/sequelize')
const Material = require('./model')
const { Op } = require("sequelize")

exports.findAll = (req,res)=>{
    Material.findAll({order :['createdAt']}).then(materiais=>{
        res.send(materiais)
    })
}