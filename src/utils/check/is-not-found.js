const { NotFoundException } = require('../../../app/exceptions');

module.exports = (resource, msg = '') => {
  if (resource === null) {
    throw new NotFoundException(msg);
  }
};
