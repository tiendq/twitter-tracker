/* eslint-disable global-require, import/no-dynamic-require */
// load .env in local development
if ('development' === process.env.NODE_ENV)
  require('dotenv-safe').config({ silent: true });

const type = process.env.PROCESS_TYPE;

let config = null;

try {
  config = require(`./${type}`);
} catch (x) {
  if ('MODULE_NOT_FOUND' === x.code)
    throw new Error(`No config for process type: ${type}`);

  throw x;
}

module.exports = config;
