const compression = require('compression');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const corsOptions = {
  origin: 'http://localhost:3002',
  optionsSuccessStatus: 200
}

const config = require('./config');
const prisma = require('./database');

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(compression());

// mount routers
app.use(cors(corsOptions));

const shutdown = async (serverApp) => {
  console.info('Received kill signal, shutting down gracefully');
  await prisma.$disconnect();
  await serverApp.close();
  return process.exit();
}

module.exports = { app, config, shutdown };
