const express = require('express');
const router = express.Router(); // Initialize Router

const UserController = require('../controller/user.controller');

router.post('/register', UserController.register);
router.post('/login', UserController.login);


module.exports = router; 