



const Buritos = require("../models/Buritos");

const findBuritos = async (req, res) => {
    try {
        const { name } = req.params;
        const buritos = await Buritos.findOne({ name }); // Utilisez findOne au lieu de find si vous attendez un seul résultat
        if (!buritos) {
            return res.status(404).json({ error: 'Buritos non trouvée 1.' });
        }
        res.json(buritos);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération du buritos.' });
    }
};

const findAllBuritos = async (req, res) => {
    try {
        const buritos = await Buritos.find();
        res.json(buritos);
    }
    catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la récupération des Buritos.' });
    }
};

const updateBuritos = async (req, res) => {
    try {
        const { name, description, price } = req.body;
        const buritos = await Buritos.findOneAndUpdate({ name }, { description }, { price }, { new: true }); // Utilisez { new: true } pour renvoyer le document mis à jour

        if (!buritos) {return res.status(404).json({ error: 'Buritos non trouvée 2.' });}

        res.json(buritos);
    }
    catch (error) {res.status(500).json({ error: 'Une erreur est survenue lors de la mise à jour du Buritos.' });}
};

const createBuritos = async (req, res) => {
    try {
        const newBuritos = await Buritos.create(req.body);
        res.status(201).json(newBuritos);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du Buritos.' });
    }
};

const deleteBuritos = async (req, res) => {
    try {
        const { name } = req.params;
        const result = await Buritos.deleteOne({ name });
        if (result.deletedCount === 0) {
            return res.status(404).json({ error: 'Buritos non trouvée 3.' });
        }
        res.sendStatus(200);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la suppression du Buritos.' });
    }
};


const activateAPI = async (req, res) => {

    try {
        const newBurritos = await Buritos.create({name:'Burrito Caliente', description: 'Riz, haricots noirs, poulet épicé, salsa, avocat, fromage, crème sure', price: 12.14});
        res.status(201).json(newBurritos);
    } catch (error) {
        res.status(500).json({ error: 'Une erreur est survenue lors de la création du Buritos.' });
    }

}

module.exports = { findBuritos, createBuritos, deleteBuritos, updateBuritos, findAllBuritos, activateAPI };
