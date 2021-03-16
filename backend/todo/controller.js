const Todo = require('../model/todo');

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
  const Todos = await Todo.find().sort({stars:-1});
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

const deleteTodo = async(req, res) =>{
   delTodo = await Todo.findByIdAndRemove(req.params.id, req.body);
   try{
    return res.send({
      success: true,
      message: "Todo deleted successfully",
      delTodo
    })
   } catch(e){
    return res.send({
      success: false,
      message: e.message || "Todo not deleted"
    })
   }  
}

module.exports = { getTodo, createTodo, getAllTodos, deleteTodo };