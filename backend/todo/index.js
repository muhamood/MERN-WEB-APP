const express = require('express');
const { getTodo, createTodo } = require('./controller');
const todoRouter = express.Router();

todoRouter.get('/', getTodo);
todoRouter.post('/create', createTodo);

module.exports = todoRouter;