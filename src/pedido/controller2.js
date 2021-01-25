const db = require("./../config/sequelize")
const Pedido = require("./model")
const User = require('./../user/model')
const Pedmat = require('./../pedmat/model')
const { Op } = require("sequelize")


exports.findAll = (req, res) => {

    let te = req.body
    Pedido.findAll({ where: { userId: te.userId } }).then(pedido => {
        res.send(pedido)
    }).then((pedido) => {
        res.send(pedido)
    }).catch((err) => {
        console.log('deu erro')
        console.error('Unable to connect to the database:', err)
    })

}



exports.remove = (req, res) => {
    let te = req.body
    console.log(te.pedidoId + ' ' + te.userId)
    Pedido.destroy({ where: { userId: {[Op.or]: [te.userId, null]}} }).then(
                res.send({
                    success: true,
                    msg: 'O usuario nao esta mais no sistema'
                }))
}