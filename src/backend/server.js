const compression = require('compression');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const { name, version } = require('./package.json');

const enviroment = process.env.NODE_ENV;

const corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200,
};

const config = require('./config/config');
const prisma = require('./config/database');

const todoRoutes = require('./api/routes/todo.route');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// mount routers
app.use(cors(corsOptions));
app.get('/', async (req, res) => res.status(200).send({ name, version, enviroment }));
app.use('/todo', todoRoutes);

app.use((req, res) => res.status(404).send('Not found'));
app.use((err, req, res) => res.status(500).send(err.message));

const shutdown = async (serverApp) => {
  // eslint-disable-next-line no-console
  console.info('Received kill signal, shutting down gracefully');
  await prisma.$disconnect();
  await serverApp.close();
  return process.exit();
};

module.exports = { app, config, shutdown };
