/* eslint-disable global-require, import/no-dynamic-require */
// load .env in local development
if ('development' === process.env.NODE_ENV)
  require('dotenv').config({ silent: true });

const processType = process.env.PROCESS_TYPE;

let config;

try {
  config = require(`./${processType}`);
} catch (x) {
  if ('MODULE_NOT_FOUND' === ex.code)
    throw new Error(`No config for process type: ${processType}`);

  throw x;
}

module.exports = config;
