const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize

const sequelize =db.sequelize;

class User extends Model {}

User.init({
    nome:{
        type: DataTypes.STRING
    },
    cpf:{
        type: DataTypes.STRING,
        unique: {
           args: true,
           msg: 'This email id is already registered.',
        }
    },
    telefone:{
        type: DataTypes.STRING 
    }     
 //       unique: true  
},{sequelize,modelName: 'users'})

module.exports = User
