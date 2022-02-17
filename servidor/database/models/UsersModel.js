const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model {}
User.init({
    name: DataTypes.STRING,
    email:DataTypes.STRING,
    timestamps: true
},{
    sequelize,
    modelName: "user"
})

module.exports = User