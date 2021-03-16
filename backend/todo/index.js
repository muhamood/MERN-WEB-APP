const express = require('express');
const todoRouter = express.Router();

todoRouter.get('/', (res, req) =>{
   return res.json('Todo end point works');
});

module.exports = todoRouter;