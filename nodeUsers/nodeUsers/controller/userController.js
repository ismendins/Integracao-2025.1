const userServ = require('../services/userService');

exports.funcHello = async (req, res) => {
  res.send("Bem vindo! Faça um pequeno GET e POST com Postman ou outras aplicações para utilizar a API");
};

exports.funcGetUsers = userServ.getAllUsers;

exports.funcPostUsers = userServ.postNewUser;

exports.funcDelUsers = userServ.deleteUser;

