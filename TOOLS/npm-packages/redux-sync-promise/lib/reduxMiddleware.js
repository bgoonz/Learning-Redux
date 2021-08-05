'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.APISync = APISync;

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isPromise(obj) {
  return !!obj && ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
}

var resolveProps = function resolveProps(obj, state, dispatch) {
  var params = arguments.length <= 3 || arguments[3] === undefined ? {} : arguments[3];

  var props = Object.keys(obj);

  return Promise.all(props.map(function (prop) {
    return isPromise(obj[prop]) ? obj[prop] : obj[prop](state, dispatch, params);
  })).then(function (resolvedArray) {
    return props.reduce(function (prev, prop, index) {
      prev[prop] = resolvedArray[index];
      return prev;
    }, {});
  });
};

var defaultOff = {
  pending: true,
  success: true,
  failure: true
};

function APISync(params) {
  var _ref = params.postfix || {};

  var pending = _ref.pending;
  var success = _ref.success;
  var failure = _ref.failure;

  var _ref2 = params || {};

  var onPending = _ref2.onPending;
  var onSuccess = _ref2.onSuccess;
  var onError = _ref2.onError;
  var off = _ref2.off;


  return function (_ref3) {
    var getState = _ref3.getState;
    var dispatch = _ref3.dispatch;
    return function (next) {
      return function (action) {

        if (!action.types) {
          return next(action);
        }

        var data = action.data;
        var types = action.types;
        var actionOff = action.off;

        var actions = _objectWithoutProperties(action, ['data', 'types', 'off']);

        var state = getState();

        var o = Object.assign({}, defaultOff, off, actionOff);

        var pendingType = pending ? types + '_' + pending : types + '_PENDING';
        var successType = success ? types + '_' + success : types + '_SUCCESS';
        var failureType = failure ? types + '_' + failure : types + '_FAILURE';

        var pendingAction = { type: pendingType, meta: data };
        var successAction = { type: successType, meta: data };
        var failureAction = { type: failureType, meta: data };

        if (o.pending) {
          next(pendingAction);
          if (onPending && typeof onPending === 'function') {
            onPending(dispatch, data);
          }
        }

        return resolveProps(actions, state, dispatch, data).then(function (results) {
          if (o.success) {
            next(_extends({}, successAction, results));
            if (onSuccess && typeof onSuccess === 'function') {
              onSuccess(dispatch, results, data);
            }
          }
        }, function (error) {
          if (o.failure) {
            next(_extends({}, failureAction, { error: error }));
            if (onError && typeof onError === 'function') {
              onError(dispatch, error, data);
            }
          }
        });
      };
    };
  };
}