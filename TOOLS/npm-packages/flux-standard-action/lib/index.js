"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isFSA = isFSA;
exports.isError = isError;

var _lodash = _interopRequireDefault(require("lodash.isplainobject"));

var _lodash2 = _interopRequireDefault(require("lodash.isstring"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function isFSA(action) {
  return (0, _lodash["default"])(action) && (0, _lodash2["default"])(action.type) && Object.keys(action).every(isValidKey);
}

function isError(action) {
  return isFSA(action) && action.error === true;
}

function isValidKey(key) {
  return ['type', 'payload', 'error', 'meta'].indexOf(key) > -1;
}