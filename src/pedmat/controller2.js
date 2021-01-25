const db = require('../config/sequelize')
const Pedmat = require('./model')
const Material = require('./../material/model')
const {Op} = db.Sequelize



exports.findOne = (req,res)=>{
    
    let te = req.body
    console.log(te.pedidoId)
    Pedmat.findAll({where: {pedidoId: te.pedidoId},include: Material}).then(pedmats=>{
        res.send(pedmats)
    })
}