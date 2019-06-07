const common = require('./components/common');
const logger = require('./components/logger');
const zeromq = require('./components/zeromq');

module.exports = {
  ...common,
  ...logger,
  ...zeromq
}
