const { services } = require("../services");

module.exports = {
  getTodos: async (req, res) => {
    try {
      const todos =  await services.todo.getTodos();
      return res.status(200).json(todos);
    } catch (error) {
      return res.status(error.statusCode).send(error.message);
    }
  },
  createTodo: async ({body}, res) => {
    try {
      const todo = await services.todo.createTodo(body);
      return res.status(200).json(todo);
    } catch (error) {
      return res.status(error.statusCode).send(error.message);
    }
  },
  createSubtask: async ({body}, res) => {
    try {
      const subTasks = await services.todo.crateSubtask(body);
      return res.status(200).json(subTasks)
    } catch (error) {
      return res.status(error.statusCode).send(error.message);
    }
  },
  updateTodo: async ({body}, res) => {
    try {
      const todo = await services.todo.updateTodo(body)
      return res.status(200).json(todo);
    } catch (error) {
      console.log(error);
      return res.status(error.statusCode).send(error.message);
    }
  },
  updateSubtask: async({body}, res) => {
    try {
      const subtask = await services.todo.updateSubtask(body);
      return res.status(200).json(subtask);
    } catch (error) {
      return res.status(error.statusCode).send(error.message);
    }
  }
}
