const express = require('express');
const { getTodo, createTodo, getAllTodos, deleteTodo } = require('./controller');
const todoRouter = express.Router();

todoRouter.get('/all', getAllTodos);
todoRouter.post('/create', createTodo);
todoRouter.delete('/delete/:id', deleteTodo);

module.exports = todoRouter;