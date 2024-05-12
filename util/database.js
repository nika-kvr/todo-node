const Sequelize = require('sequelize');

const sequelize = new Sequelize('todo-app', 'root', '123123', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
