const mongoose = require('mongoose');

const getAllTodo = async (req, res) =>{
  return res.send({
      success: true,
      message: "Todos successfully retrieved"
  });
}

module.exports = { getAllTodo };