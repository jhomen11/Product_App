const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class Product extends Model{}
Product.init({
    name: DataTypes.STRING,
    price: DataTypes.FLOAT,
    description: DataTypes.TEXT 
},{
    sequelize,
    modelName: "user"
})

module.exports = Product