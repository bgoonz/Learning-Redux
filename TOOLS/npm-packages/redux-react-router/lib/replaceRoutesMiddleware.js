'use strict';

exports.__esModule = true;
exports['default'] = replaceRoutesMiddleware;

var _constants = require('./constants');

function replaceRoutesMiddleware(replaceRoutes) {
  return function () {
    return function (next) {
      return function (action) {
        if (action.type === _constants.REPLACE_ROUTES) {
          replaceRoutes(action.payload);
        }
        return next(action);
      };
    };
  };
}

module.exports = exports['default'];