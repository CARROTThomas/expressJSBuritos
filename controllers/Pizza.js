



const Pizza = require("../models/Pizza");


async function findPizza(req, res){

    let { name } = req.params

    let pizza = await Pizza.find({name: name})
    res.send(200, pizza)
}

async function findAllPizza(req, res){
    try {
        const pizzas = await Pizza.find()
        //res.send(200, pizzas)
        res.send(pizzas);
    }
    catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des pizzas.' });
    }
}

async function updatePizza(req, res){

    let { name,price } = req.body

    let pizza = await Pizza.findOneAndUpdate({name: name, price:price})
    res.send(200, pizza)
}

async function createPizza(req, res){

    let { ...pizzaParams} = req.body

    let newPizza = await Pizza.create({...pizzaParams})
    res.sendStatus(201)
}

async function deletePizza(req, res){

    const  { name }  = req.params

    let thisPizza = await Pizza.deleteOne({ name: name })
    res.sendStatus(200)
}

module.exports = { findPizza, createPizza, deletePizza, updatePizza, findAllPizza }