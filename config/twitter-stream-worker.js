const common = require('./components/common');
const logger = require('./components/logger');
const twitter = require('./components/twitter');
const zeromq = require('./components/zeromq');

module.exports = {
  ...common,
  ...logger,
  ...twitter,
  ...zeromq
}
