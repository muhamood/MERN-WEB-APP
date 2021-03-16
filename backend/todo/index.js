const express = require('express');
const { getAllTodo } = require('./controller');
const todoRouter = express.Router();

todoRouter.get('/all', getAllTodo);

module.exports = todoRouter;