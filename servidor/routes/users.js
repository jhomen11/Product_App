const express = require('express')
const router = express.Router()
const User = require('../database/models/UsersModel')

//POST
router.post('/', (req, res)=>{
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    }).then(user =>{
        res.json(user)
    })
})

module.exports = router