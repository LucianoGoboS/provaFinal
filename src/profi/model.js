const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize

const sequelize =db.sequelize;

class Profi extends Model {}

Profi.init({
    nome:{
        type: DataTypes.STRING
    },

    senha:{
        type: DataTypes.STRING
    },  
    
    setor:{
        type: DataTypes.STRING
    } 
},{sequelize,modelName: 'profis'})

module.exports = Profi