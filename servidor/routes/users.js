const express = require('express')
const router = express.Router()
const User = require('../database/models/UsersModel')

//POST
router.post('/', (req, res)=>{
    User.create({
        name: req.body.name,
        lastname: req.body.lastname,
        email: req.body.email,
        password: req.body.password,
    }).then(user =>{
        res.json(user)
    }).catch(error =>{
        res.json(error)
    })
})

//GET
router.get('/', (req, res) => {
    User.findAll().then(users => {
        res.json(users)
    })
})

module.exports = router