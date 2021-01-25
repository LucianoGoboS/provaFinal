const db = require('./../config/sequelize')
const Material = require('./model')

exports.create = (req, res) => {
    Material.create({
            nome: req.body.nome,
            descricao: req.body.descricao,
            unidade: req.body.unidade,
            valor: req.body.valor,
    }).then((material) => {
        res.send(material)
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

exports.findAll = (req,res)=>{
        Material.findAll({order :['createdAt']}).then(material=>{
            res.send(material)
        })
    }


    

    exports.update = (req,res)=>{
        let te = req.body
        console.log(te.id)
        Material.update(
            {
                nome: req.body.nome,
                descricao:req.body.descricao,
                unidade:req.body.unidade,
                valor:req.body.valor

            },
            {
                where: {
                    id: te.id
                }
            }
        ).then(()=>{
            res.send({'message':'ok'})
        })
    }    