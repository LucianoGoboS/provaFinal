const db = require('./../config/sequelize')
const { Op } = require("sequelize")
const Pedmat = require('./model')
const Pedido = require('./../pedido/model')
const Material = require('./../material/model')

exports.create = (req,res)=>{
    Pedmat.create({
        nome: req.body.nome,
        unidade: req.body.unidade,
        quantidade: req.body.quantidade,
        preco: req.body.preco,
        pedidoId: req.body.pedidoId,
        materiaiId: req.body.materialId
    },{
            include : [{
            association : Pedmat.Pedido,
            association : Pedmat.Material
        }]
    }).then((pedmat)=>{
        res.send(pedmat)
    }).catch((err)=>{
        console.log("Erro: " + err)
    })
}

exports.remove = (req, res) => {
    let te = req.body
    console.log(te.pedidoId + ' ' + te.userId)
    Pedmat.destroy({ where: { pedidoId: {[Op.or]: [te.pedidoId, null]}} }).then(
                res.send({
                    success: true,
                    msg: 'O usuario nao esta mais no sistema'
                }))
}

exports.update = (req,res)=>{
    Pedmat.update(
        {
            quantidade: req.body.quantidade,
            preco: req.body.preco

        },
        {
            where: {
                pedidoId: req.body.pedidoId,
                materiaiId: req.body.materiaiId
            }
        }
    ).then(()=>{
        res.send({'message':'ok'})
    }).catch(
        Pedmat.update(
            {
                quantidade: req.body.quantidade,
                preco: req.body.preco,
                materiaiId: req.body.materiaiId
    
            },
            {
                where: {
                    pedidoId: req.body.pedidoId,
                    materiaiId: req.body.materiaiId
                }
            }
        )
    )
}