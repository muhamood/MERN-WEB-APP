const Todo = require('../model/todo');

const getTodo = (req, res) =>{
  return res.send("Todo successfully retrieved");
}

const createTodo = async (req, res) =>{
  const newTodo = new Todo(req.body);
  try{
    await newTodo.save();
    return res.send({
      success: true,
      message: "Todo created successfully",
      newTodo
    });
  } catch(e){
    return res.send({
      success: false,
      message: e.message || "Todo not created",
    });
  }
}

const getAllTodos = async (req, res) =>{
  const Todos = await Todo.find();
  try{
    return res.send({
      success: true,
      message: "Todos retrieved successfully",
      Todos
    })
  } catch(e){
    return res.send({
     success: false,
     message: "Something happened...Todos not found"
    })
  }
}
module.exports = { getTodo, createTodo, getAllTodos };