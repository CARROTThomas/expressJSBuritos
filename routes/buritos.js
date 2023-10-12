const { Router } = require('express');
const router = Router();

const buritosController = require('../controllers/Buritos');





// Routes utilisant le contrôleur
router.get('/findAll', buritosController.findAllBuritos);

router.get('/show/:name', buritosController.findBuritos);

router.post('/add', buritosController.createBuritos);
router.put('/update/:name', buritosController.updateBuritos);
router.delete('/delete/:name', buritosController.deleteBuritos);

module.exports = router;