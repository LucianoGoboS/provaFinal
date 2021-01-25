const db = require("./../config/sequelize")
const {Model,DataTypes} = db.Sequelize

const sequelize =db.sequelize;

class Material extends Model {}

Material.init({
    nome:{
        type: DataTypes.STRING
    },
    descricao:{
        type: DataTypes.STRING
    },
    unidade:{
        type: DataTypes.STRING
    },    
    valor:{
        type: DataTypes.DOUBLE
    }      
},{sequelize,modelName: 'materiais'})

module.exports = Material