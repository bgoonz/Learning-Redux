'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports['default'] = promisePropsMiddleware;
var isPromise = function isPromise(obj) {
  return obj && typeof obj.then === 'function';
};
var hasPromiseProps = function hasPromiseProps(obj) {
  return Object.keys(obj).some(function (key) {
    return isPromise(obj[key]);
  });
};

var resolveProps = function resolveProps(obj) {
  var props = Object.keys(obj);
  var values = props.map(function (prop) {
    return obj[prop];
  });

  return Promise.all(values).then(function (resolvedArray) {
    return props.reduce(function (acc, prop, index) {
      acc[prop] = resolvedArray[index];
      return acc;
    }, {});
  });
};

var getNonPromiseProperties = function getNonPromiseProperties(obj) {
  return Object.keys(obj).filter(function (key) {
    return !isPromise(obj[key]);
  }).reduce(function (acc, key) {
    acc[key] = obj[key];
    return acc;
  }, {});
};

function promisePropsMiddleware() {
  return function (next) {
    return function (action) {
      var types = action.types;
      var payload = action.payload;

      if (!types || !hasPromiseProps(action.payload)) {
        return next(action);
      }

      var nonPromiseProperties = getNonPromiseProperties(payload);

      var PENDING = types[0];
      var RESOLVED = types[1];
      var REJECTED = types[2];

      var pendingAction = { type: PENDING, payload: nonPromiseProperties };
      var successAction = { type: RESOLVED };
      var failureAction = { type: REJECTED, error: true, meta: nonPromiseProperties };
      if (action.meta) {
        [pendingAction, successAction, failureAction].forEach(function (nextAction) {
          nextAction.meta = _extends({}, nextAction.meta, action.meta);
        });
      }

      next(pendingAction);
      return resolveProps(payload).then(function (results) {
        return next(_extends({}, successAction, { payload: results }));
      }, function (error) {
        return next(_extends({}, failureAction, { payload: error }));
      });
    };
  };
}

module.exports = exports['default'];