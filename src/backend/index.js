const { app, config: { port }, shutdown } = require('./server');

// eslint-disable-next-line no-console
const server = app.listen(port, console.log(`Server ready at http://localhost:${port}`));

process.on('SIGINT', async () => {
  await shutdown(server);
});

process.on('SIGTERM', async () => {
  // eslint-disable-next-line no-console
  console.log('signterm shutdown');
  await shutdown(server);
});
