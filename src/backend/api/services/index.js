const todoServices = require('./todo.services');

module.exports = {
  services: {
    todo: new todoServices(),
  }
}
