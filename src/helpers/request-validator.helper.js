const { validationResult, matchedData } = require('express-validator');
const { UnprocessableEntityException } = require('../../app/exceptions');
const translateRequestError = require('./translate-request-error.helper.js');

function createRequestValidator(rules) {
  const validator = async (req, res, next) => {
    try {
      await validationResult(req).throw();

      req.body = matchedData(req, { includeOptionals: true });

      next();
    } catch (err) {
      next(
        new UnprocessableEntityException('', translateRequestError(req, err))
      );
    }
  };

  return [rules, validator];
}

module.exports = createRequestValidator;
