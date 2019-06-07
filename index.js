const logger = require('winston');

const type = process.env.PROCESS_TYPE;

logger.info(`Starting '${type}' process...`, { pid: process.pid });

switch (type) {
  case 'web':
    require('./web');
    break;

  case 'twitter-stream-worker':
    require('./worker/twitter-stream');
    break;

  case 'social-preprocessor-worker':
    require('./worker/social-preprocessor');
    break;

  default:
    throw new Error(`${type} is an unsupported process type. Use one of: 'web', 'twitter-stream-worker', 'social-preprocessor-worker'!`);
}
