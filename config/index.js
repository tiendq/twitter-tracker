const dotenv = require('dotenv-safe');

let { parsed } = dotenv.config({ silent: true });

if ('development' === process.env.NODE_ENV) {
  console.log('Environment variables:');
  console.log(parsed);
}

let type = process.env.PROCESS_TYPE;
let config = null;

try {
  config = require(`./${type}`);
} catch (x) {
  if ('MODULE_NOT_FOUND' === x.code)
    throw new Error(`No configuration for process type: ${type}`);

  throw x;
}

module.exports = config;
