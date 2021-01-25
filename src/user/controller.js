const db = require("./../config/sequelize")
const User = require("./model")
const { Op } = require("sequelize")

exports.create = (req, res) => {
    User.create({
            nome: req.body.nome,
            cpf: req.body.cpf,
            telefone: req.body.telefone,
    }).then((user) => {
        res.send(user)
    }).catch( (err)=> {
            console.log('deu erro')
    //      console.error('Unable to connect to the database:', err)
          
  //        res.send({'erro':'cpf ja existente'})
  //        return err
            res.status(400)
            res.send({
 //            success: false,
             msg: 'Erro: O CPF informado já existe'
             })

      })
}

exports.findAll = (req, res) => {
    User.findAll().then(users => {
        res.send(users)
    }).catch((err)=>{
        console.log("Erro: " + err)
    })
}

exports.remove = (req, res) => {
    let te = req.body
    console.log(te.id)
    User.destroy({ where: { id: {[Op.or]: [te.id, null]}} }).then(
                res.send({
                    success: true,
                    msg: 'O usuario nao esta mais no sistema'
                }))
}

exports.update = (req,res)=>{
    User.update(
        {
            nome: req.body.nome,
            telefone: req.body.telefone
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





