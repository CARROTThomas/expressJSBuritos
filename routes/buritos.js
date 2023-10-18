const { Router } = require('express');
const router = Router();

const buritosController = require('../controllers/Buritos');
const isAuth = require("../middleware/is-auth");

// Routes utilisant le contrôleur

// FindALL
router.get('/findAll', isAuth, buritosController.findAllBuritos);

// CRUD
router.get('/show/:name', isAuth, buritosController.findBuritos);
router.post('/add', isAuth, buritosController.createBuritos);
router.put('/update/:name', isAuth, buritosController.updateBuritos);
router.delete('/delete/:name', isAuth, buritosController.deleteBuritos);

module.exports = router;