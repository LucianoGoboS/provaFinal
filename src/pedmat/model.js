const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize
const Pedido = require("./../pedido/model")
const Material = require("./../material/model")


const sequelize =db.sequelize;

class Pedmat extends Model {}

Pedmat.init({

    nome:{
        type: DataTypes.STRING
    },
    unidade:{
        type: DataTypes.STRING
    },
    quantidade:{
        type: DataTypes.DOUBLE
    },
    preco:{
        type: DataTypes.DOUBLE
    }
},{sequelize,modelName: 'pedmats'})

Pedmat.Pedido = Pedmat.belongsTo(Pedido)
Pedido.hasMany(Pedmat)
Pedmat.Material = Pedmat.belongsTo(Material)
Material.hasMany(Pedmat)

module.exports = Pedmat