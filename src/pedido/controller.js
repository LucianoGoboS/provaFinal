const db = require('./../config/sequelize')
const { Op } = require("sequelize")
const Pedido = require('./model')
const User = require('./../user/model')
const Pedmat = require('./../pedmat/model')

exports.create = (req,res)=>{
    Pedido.create({
        nome: req.body.nome,
        valor: req.body.valor,
        userId: req.body.userId
    },{
            include : [{
            association : Pedido.User
        }]
    }).then((pedido)=>{
        res.send(pedido)
    }).catch((err)=>{
        console.log("Erro: " + err)
    })
}

exports.remove = (req,res)=>{
    let te = req.body
    console.log(te.id)
    Pedmat.destroy({
        where: {
            pedidoId:{[Op.or]: [te.id, null]}
        }

    }).then(()=>{
        Pedido.destroy({where: {id:te.id}})
        res.send({
                        success: true,
                        msg: 'O usuario nao esta mais no sistema'
                        })
        
    })
}

exports.update = (req,res)=>{
    Pedido.update(
        {
            valor: req.body.valor
        },
        {
            where: {
                id: req.body.id
            }
        }
    ).then(()=>{
        res.send({'message':'ok'})
    })
}