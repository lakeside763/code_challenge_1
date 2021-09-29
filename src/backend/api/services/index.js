const TodoServices = require('./todo.services');

module.exports = {
  services: {
    todo: new TodoServices(),
  },
};
