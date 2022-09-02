const { ForbiddenException } = require('../../../app/exceptions');

module.exports = (cond, msg) => {
  if (cond) throw new ForbiddenException(msg);
};
