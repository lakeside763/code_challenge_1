const AppService = require("./app.services");
const prisma = require('../../config/database');

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
      }
    });
  }

  async crateSubtask({ todo_id, title }) {
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
  }

  async updateTodo({ id, status }) {
    await prisma.subtask.updateMany({
      where: { todo_id: id },
      data: {
        status,
        updated_at: new Date(),
      }
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
  }

  async updateSubtask({ id, status }) {
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
  }
}

module.exports = TodoService;
