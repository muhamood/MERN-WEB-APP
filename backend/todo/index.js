const express = require('express');
const { getTodo, createTodo, getAllTodos } = require('./controller');
const todoRouter = express.Router();

todoRouter.get('/', getTodo);
todoRouter.get('/all', getAllTodos);
todoRouter.post('/create', createTodo);

module.exports = todoRouter;