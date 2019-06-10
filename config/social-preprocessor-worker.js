const common = require('./components/common');
const logger = require('./components/logger');
const zeromq = require('./components/zeromq');
const redis = require('./components/redis');

module.exports = {
  ...common,
  ...logger,
  ...redis,
  ...zeromq
}
