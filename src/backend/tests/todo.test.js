const { app } = require('../server')
const supertest = require('supertest');
const request = supertest(app);
const prisma = require('../config/database');


describe('Todo test', () => {
  beforeAll(() => {});

  afterEach(async () => {
    await prisma.subtask.deleteMany();
    await prisma.todo.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });


  test('true is truthy', () => expect(true).toBeTruthy());

  test('should allow to create todo task', async () => {
    const { statusCode, body } = await request
      .post('/todo')
      .set('Accept', 'application/json')
      .send({title: 'Weekend shopping'})
      .then((res) => {
        if (res.statusCode !== 200) return  {statusCode: res.statusCode, body: res.error.message}
        return {statusCode: res.statusCode, body: res.body}
      })

    expect(statusCode).toBe(200);
    expect(body).toHaveProperty('id');
    expect(body.created_at).toBeTruthy();
  });
});
