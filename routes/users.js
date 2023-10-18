

const { Router } = require('express');
const router = Router();

const UserController = require('../controllers/User');
const isAuth = require("../middleware/is-auth");


// Routes utilisant le contrôleur

// Login
router.post("/login", UserController.login);

// Register
router.post("/register", UserController.register);

// logout
router.post("/logout", isAuth, UserController.logout);


module.exports = router;