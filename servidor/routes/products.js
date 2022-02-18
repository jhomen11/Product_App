const express = require('express')
const router = express.Router()
const Product = require('../database/models/ProductsModel')

router.get('/', (req, res)=>{
    res.send("Hola")
})

//POST
router.post('/', (req, res)=>{
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).then(post =>{
        res.json(post)
    })
})
//GET
//GET/:id
//PUT
//DELETE

module.exports = router