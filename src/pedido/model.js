const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize
const User = require("./../user/model")


const sequelize =db.sequelize;

class Pedido extends Model {}

Pedido.init({
    nome:{
        type: DataTypes.STRING
    },
    valor:{
        type: DataTypes.DOUBLE
    }
},{sequelize,modelName: 'pedidos'})

Pedido.User = Pedido.belongsTo(User)
User.hasMany(Pedido)

module.exports = Pedido