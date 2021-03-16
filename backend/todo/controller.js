const Todo = require('../model/todo');

const getTodo = (req, res) =>{
  return res.send("Todo successfully retrieved");
}

const createTodo = async (req, res) =>{
  const newTodo = new Todo(req.body);
  await newTodo.save();
  return res.send({
    success: true,
    message: "Todo created successfully",
    newTodo
  });
}

module.exports = { getTodo, createTodo };