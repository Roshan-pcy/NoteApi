const express = require('express');
const router = express.Router(); // Initialize Router

const todoController = require('../controller/todo.controller');
router.post('/todoCreate',todoController.createTodo);
router.post('/getToDoData',todoController.gettododata);
router.post('/deletetodo',todoController.deletetodo);
module.exports = router; 