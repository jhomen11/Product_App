const { Model, DataTypes } = require('sequelize')
const sequelize = require('../db')

class User extends Model {}
User.init({
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "El campo no puede estar vacio"
            },
            isAlpha: {
                args: true,
                msg: "El nombre solo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "El nombre debe tener en 2 y 255 caracteres"
            }
        }
    },
    lastname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "El campo no puede estar vacio"
            },
            isAlpha: {
                args: true,
                msg: "El apellido solo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "El apellido debe tener en 2 y 255 caracteres"
            }
        }
    },
    email:{
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "El campo no puede estar vacio"
            },
            isEmail: {
                args: true,
                msg: "El correo de ser valido correo@correo.com"
            }  
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull:{
                msg: "El campo no puede estar vacio"
            },
            len: {
                args: [3, 255],
                msg: "La contraseña debe tener en 3 y 255 caracteres"
            }

        }
    }
},{
    sequelize,
    modelName: "user"
})

module.exports = User