



const Pizza = require("../models/pizza");

const findPizza = async (req, res) => {
    try {
        const { name } = req.params;
        const pizza = await Pizza.findOne({ name }); // Utilisez findOne au lieu de find si vous attendez un seul résultat
        if (!pizza) {
            return res.status(404).json({ error: 'Pizza non trouvée 1.' });
        }
        res.json(pizza);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération de la pizza.' });
    }
};

const findAllPizza = async (req, res) => {
    try {
        const pizzas = await Pizza.find();
        res.json(pizzas);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des pizzas.' });
    }
};

const updatePizza = async (req, res) => {
    try {
        const { name, price } = req.body;
        const pizza = await Pizza.findOneAndUpdate({ name }, { price }, { new: true }); // Utilisez { new: true } pour renvoyer le document mis à jour
        if (!pizza) {
            return res.status(404).json({ error: 'Pizza non trouvée 2.' });
        }
        res.json(pizza);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour de la pizza.' });
    }
};

const createPizza = async (req, res) => {
    try {
        const pizzaParams = req.body; // Inutile de créer un nouvel objet
        const newPizza = await Pizza.create(pizzaParams);
        res.status(201).json(newPizza);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la création de la pizza.' });
    }
};

const deletePizza = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await Pizza.deleteOne({ name });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Pizza non trouvée 3.' });
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression de la pizza.' });
    }
};

module.exports = { findPizza, createPizza, deletePizza, updatePizza, findAllPizza };
