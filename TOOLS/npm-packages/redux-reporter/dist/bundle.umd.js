(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.reduxReporter = global.reduxReporter || {})));
}(this, (function (exports) { 'use strict';

var defaultSelect = function (ref) {
  var meta = ref.meta; if ( meta === void 0 ) meta = {};

  return meta.report;
};

var reporter = function (handler, select) {
  if ( select === void 0 ) select = defaultSelect;

  return function (ref) {
  var getState = ref.getState;

  return function (next) { return function (action) {
  var returnValue = next(action);

  if (typeof action === 'function') {
    return returnValue
  }

  var report = select(action);

  if (!report) {
    return returnValue
  }

  handler(report, getState);

  return returnValue
}; };

}  };

var errorSelect = function (ref) {
  var error = ref.error; if ( error === void 0 ) error = false;
  var payload = ref.payload;
  var type = ref.type;

  if (!error) {
    return null
  }

  if (!payload) {
    console.warn('Actions that represent errors should have an error object as payload, generic error used');
    return new Error(type)
  }

  return payload
};

var errorReporter = function (handler) { return reporter(handler, errorSelect); };

var crashReporter = function (handler) { return function (ref) {
  var getState = ref.getState;

  return function (next) { return function (action) {
  var returnValue;

  try {
    returnValue = next(action);
  } catch (err) {
    handler(err, getState);
    console.error(err);
  }

  return returnValue
}; };
 }  };

exports.errorReporter = errorReporter;
exports.crashReporter = crashReporter;
exports['default'] = reporter;

Object.defineProperty(exports, '__esModule', { value: true });

})));
