const http = require('http');
const logger = require('winston');
const config = require('../config');
const app = require('./server');

let server = http.createServer(app.requestHandler);

server.listen(config.server.port, (error) => {
  if (error) {
    logger.error('Error happened during server start', error);
    process.exit(1);
  }

  logger.info(`App is listening on port ${server.address().port}`);
});
