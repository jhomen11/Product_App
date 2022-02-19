const express = require('express')
const router = express.Router()
const Product = require('../database/models/ProductsModel')


//POST
router.post('/', (req, res)=>{
    Product.create({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }).then(product =>{
        res.json(product)
    })
})

//GET
router.get('/', (req, res)=>{
    Product.findAll().then(products => {
        res.json(products)
    })
})

//GET/:id
router.get('/:id', (req, res)=>{
    Product.findByPk(req.params.id).then(product => {
        res.json(product)
    })
})
//PUT
router.put('/:id', (req, res) => {
    Product.update({
        name: req.body.name,
        price: req.body.price,
        description: req.body.description
    }, {
        where:{
            id: req.params.id
        }
    }).then(result =>{
        res.json(result)
    })
})
//DELETE
router.delete('/:id', (req, res) => {
    Product.destroy({
        where:{
            id: req.params.id
        }
    }).then(result => {
        res.json(result)
    })
})

module.exports = router