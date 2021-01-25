const db = require("./../config/sequelize")
const Profi = require("./model")

exports.findAll = (req,res)=>{
    
    let te = req.body
    Profi.findAll({where: {senha: te.senha}}).then(profis=>{
        res.send(profis)
    }).then((profi) => {
        res.send(profi)
    }).catch((err)=>{
        console.log('deu erro')
        console.error('Unable to connect to the database:', err)
    })
}

exports.create = (req, res) => {
    Profi.create({
            nome: req.body.nome,
            senha: req.body.senha,
            setor: req.body.setor
    }).then((profi) => {
        res.send(profi)
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