'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isCheerioTask = isCheerioTask;

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

var _cheerio = require('cheerio');

var _cheerio2 = _interopRequireDefault(_cheerio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isString = function isString(myVar) {
  return typeof myVar === 'string' || myVar instanceof String;
};

// verifies that action should be handled by middleware
function isCheerioTask(action) {
  try {
    // TODO MOVE INTO OWN FUNC
    if (typeof action.payload.task === 'function' && isString(action.payload.url) === true && action.type === "CHEERIO_TASK") {
      return true;
    }
  } catch (e) {
    if (e instanceof TypeError === true) {
      return false;
    }
  }
  return false;
}

function createCheerioMiddleware() {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {

        if (isCheerioTask(action) === true) {
          var pendingAction = {
            type: action.type + '_PENDING',
            payload: action.payload
          };

          dispatch(pendingAction);

          return _axios2.default.get(action.payload.url).then(function (response) {
            var $ = _cheerio2.default.load(response.data);
            var parsedData = action.payload.task($);
            var fulfilledAction = {
              type: action.type + '_FULFILLED',
              payload: {
                parsedData: parsedData
              }
            };

            dispatch(fulfilledAction);
          }).catch(function (err) {
            var rejectedAction = {
              type: action.type + '_REJECTED',
              payload: {
                err: err
              }
            };

            dispatch(rejectedAction);
          });
        }

        return next(action);
      };
    };
  };
}

var cheerioMiddleware = createCheerioMiddleware();

exports.default = cheerioMiddleware;