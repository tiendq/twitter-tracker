const common = require('./components/common');
const logger = require('./components/logger');
const twitter = require('./components/twitter');

module.exports = {
  ...common,
  ...logger,
  ...twitter
}
