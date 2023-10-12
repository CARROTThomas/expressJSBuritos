const { Router } = require('express');
const router = Router();

const pizzaController = require('../controllers/Pizza');

// Tableau de pizzas (simulé, à remplacer par MongoDB)
const pizzas = [
    {
        id: 1,
        name: 'trois fromages',
        price: 13,
    },
    {
        id: 2,
        name: 'reine',
        price: 12,
    },
    {
        id: 3,
        name: 'margherita',
        price: 10,
    },
];


/*
// Récupérer toutes les pizzas (simulé, à remplacer par MongoDB)
router.get('/', (req, res) => {
    res.json(pizzas);
});
// Récupérer une pizza par nom (simulé, à remplacer par MongoDB)

router.get('/:name', (req, res) => {
    const { name } = req.params;
    const pizza = pizzas.find((p) => p.name === name);
    if (!pizza) {
        return res.status(404).json({ error: 'Pizza non trouvée.' });
    }
    res.json(pizza);
});
// Créer une nouvelle pizza (simulé, à remplacer par MongoDB)
router.post('/new', (req, res) => {
    const pizzaRecue = req.body;
    const id = Math.max(...pizzas.map((pizz) => pizz.id)) + 1;
    const newPizza = { id, ...pizzaRecue };
    pizzas.push(newPizza);
    res.json(newPizza);
});
*/




// Routes utilisant le contrôleur
router.get('/findAll', pizzaController.findAllPizza);

router.get('/show/:name', pizzaController.findPizza);

router.post('/add', pizzaController.createPizza);
router.put('/update/:name', pizzaController.updatePizza);
router.delete('/delete/:name', pizzaController.deletePizza);

module.exports = router;