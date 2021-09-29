const AppService = require("./app.services");
const prisma = require('../../config/database');
const ErrorResponse = require('./../../helpers/error.helper')


class TodoService extends AppService {
  async getTodos() {
    return prisma.todo.findMany({
      include: {
        subtask: true
      }
    });
  }

  async createTodo({ title }) {
    return prisma.todo.create({
      data: {
        title,
      },
      include: {
        subtask: true,
      }
    });
  }

  async crateSubtask({ todo_id, title }) {
    try {
      await prisma.subtask.create({
        data: {
          title,
          todo: { connect: { id: todo_id } }
        }
      })
      return prisma.todo.findUnique({
        where: { id: todo_id },
        include: { subtask: true },
      });
    } catch (error) {
      if (error.name === 'Error') throw new ErrorResponse('Bad Request', 400)
      throw new ErrorResponse(error.name, 500)
    }
  }

  async updateTodo({ id, status }) {
    try {
      await prisma.subtask.updateMany({
        where: { todo_id: id },
        data: {
          status,
          updated_at: new Date(),
        },
      });
      return prisma.todo.update({
        where: { id },
        data: {
          status,
          updated_at: new Date(),
        },
        include: {
          subtask: true,
        }
      });
    } catch (error) {
      if (error.name === 'Error') throw new ErrorResponse('Bad Request', 400)
      throw new ErrorResponse(error.name, 500)
    }
  }

  async updateSubtask({ id, status }) {
    try {
      const subtask = await prisma.subtask.update({
        where: { id },
        data: {
          status,
          updated_at: new Date(),
        }
      });
      const pending_subtasks = await prisma.subtask.findMany({
        where: {
          todo_id: subtask.todo_id,
          status: 'PENDING'
        }
      });
      return prisma.todo.update({
        where: { id: subtask.todo_id },
        data: {
          status: pending_subtasks.length > 0 ? 'PENDING' : 'COMPLETED',
          updated_at: new Date(),
        },
        include: {
          subtask: true,
        }
      });
    } catch (error) {
      if (error.name === 'Error') throw new ErrorResponse('Bad Request', 400)
      throw new ErrorResponse(error.name, 500)
    }
  }
}

module.exports = TodoService;
