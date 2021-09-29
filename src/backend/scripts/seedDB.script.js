const prisma = require('../config/database');

const todoList = [
  {
    id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
    title: 'Buy Nescafe',
    status: 'COMPLETED',
    created_at: '2021-09-24T15:17:40.052Z',
    updated_at: '2021-09-29T09:39:47.350Z',
    subtask: [
      {
        id: 'dcbd1d02-32b9-4d61-8175-8c857ecc9cc3',
        todo_id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
        title: 'Dark color',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:34:37.094Z',
        updated_at: '2021-09-29T09:39:47.298Z',
      },
      {
        id: '392dcea1-faf9-4c4a-a7b5-411c45c3ba5e',
        todo_id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
        title: 'Brown Color',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:45:07.283Z',
        updated_at: '2021-09-29T09:39:47.298Z',
      },
      {
        id: '2a1fa60c-8572-404c-ac6d-70d6ee0c7161',
        todo_id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
        title: 'Bright color',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:37:08.282Z',
        updated_at: '2021-09-29T09:39:47.298Z',
      },
      {
        id: '50540b97-ed2e-4b2b-8bff-d5355cb77bde',
        todo_id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
        title: 'Yello Color',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:41:13.118Z',
        updated_at: '2021-09-29T09:39:47.298Z',
      },
      {
        id: '40351ac0-74ac-4af1-aedc-1349350d841f',
        todo_id: 'eff50591-d9e9-4080-8275-62aa5947aea0',
        title: 'Green color',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:48:33.836Z',
        updated_at: '2021-09-29T09:39:47.298Z',
      },
    ],
  },
  {
    id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
    title: 'Capacity Building',
    status: 'COMPLETED',
    created_at: '2021-09-26T11:45:41.146Z',
    updated_at: '2021-09-29T09:40:06.167Z',
    subtask: [
      {
        id: '6b2ed182-c5d4-4f11-91b7-670040ba3fd3',
        todo_id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
        title: 'Learning Graphql',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:48:52.275Z',
        updated_at: '2021-09-29T03:59:29.272Z',
      },
      {
        id: 'bf8f23a6-ce28-4086-93f3-ef30af5c0d40',
        todo_id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
        title: 'Learning React',
        status: 'COMPLETED',
        created_at: '2021-09-26T16:02:11.227Z',
        updated_at: '2021-09-29T03:59:29.272Z',
      },
      {
        id: '23c7e4b5-d573-43a7-b5e7-2845b4f594db',
        todo_id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
        title: 'Learning Kubernetes',
        status: 'COMPLETED',
        created_at: '2021-09-26T15:49:06.498Z',
        updated_at: '2021-09-29T03:59:29.272Z',
      },
      {
        id: 'ef9c45af-bfad-4b35-a630-428e2cbd16a4',
        todo_id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
        title: 'Learning Angular',
        status: 'COMPLETED',
        created_at: '2021-09-28T16:47:51.003Z',
        updated_at: '2021-09-29T03:59:29.272Z',
      },
      {
        id: '5f6b1cb6-b9cf-4600-b091-58c01f8eed28',
        todo_id: 'd422bd4b-71c2-49c0-9dae-5bc44e0e2fc3',
        title: 'Learning Docker',
        status: 'COMPLETED',
        created_at: '2021-09-29T09:40:00.356Z',
        updated_at: '2021-09-29T09:40:06.107Z',
      },
    ],
  },
  {
    id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
    title: 'Weekend Shopping',
    status: 'COMPLETED',
    created_at: '2021-09-24T08:32:08.704Z',
    updated_at: '2021-09-28T12:25:50.968Z',
    subtask: [
      {
        id: '944ad9e1-ad3d-44f0-a360-e6f9c3278e38',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Beverages',
        status: 'COMPLETED',
        created_at: '2021-09-24T14:13:00.341Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
      {
        id: 'c7b2739e-2237-456b-938f-6109eb4ceade',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Jeameson',
        status: 'COMPLETED',
        created_at: '2021-09-24T14:18:55.396Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
      {
        id: 'b9d895de-f7b2-4063-bb55-c0a67dfed8c4',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Malth',
        status: 'COMPLETED',
        created_at: '2021-09-24T14:18:55.396Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
      {
        id: 'eebc5781-ed52-45ab-ad63-795e798ae183',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Drinks',
        status: 'COMPLETED',
        created_at: '2021-09-24T14:13:00.341Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
      {
        id: 'a98739e1-e49f-4ab3-aa2b-e9a9a416aa1d',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Nescafe',
        status: 'COMPLETED',
        created_at: '2021-09-24T15:19:15.022Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
      {
        id: '02cbd956-7942-415d-b41d-8b8199994b37',
        todo_id: '7f998c38-2fef-434c-82b7-55e4d4710ffb',
        title: 'Buy Spaghetti',
        status: 'COMPLETED',
        created_at: '2021-09-26T16:02:33.626Z',
        updated_at: '2021-09-28T12:25:50.965Z',
      },
    ],
  },
];

const seedDB = async () => {
  await Promise.all(todoList.map(async (todo) => {
    const item = await prisma.todo.create({
      data: {
        title: todo.title,
        status: todo.status,
      },
    });
    const { subtask } = todo;
    subtask.map(async (task) => {
      await prisma.subtask.create({
        data: {
          title: task.title,
          status: task.status,
          todo: { connect: { id: item.id } },
        },
      });
    });
  }));
};

seedDB();
