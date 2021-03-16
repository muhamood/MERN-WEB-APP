const express = require('express');
const { getTodo } = require('./controller');
const todoRouter = express.Router();

todoRouter.get('/', getTodo);

module.exports = todoRouter;