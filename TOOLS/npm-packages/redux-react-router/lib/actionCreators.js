'use strict';

exports.__esModule = true;
exports.routerDidChange = routerDidChange;
exports.replaceRoutes = replaceRoutes;
exports.historyAPI = historyAPI;

var _constants = require('./constants');

/**
 * Action creator for signaling that the router has changed.
 * @private
 * @param  {RouterState} state - New router state
 * @return {Action} Action object
 */

function routerDidChange(state) {
  return {
    type: _constants.ROUTER_DID_CHANGE,
    payload: state
  };
}

/**
 * Action creator that replaces the current route config
 * @private
 * @param {Array<Route>|ReactElement} routes - New routes
 */

function replaceRoutes(routes) {
  return {
    type: _constants.REPLACE_ROUTES,
    payload: routes
  };
}

/**
 * Creates an action creator for calling a history API method.
 * @param {string} method - Name of method
 * @returns {ActionCreator} Action creator with same parameters as corresponding
 * history method
 */

function historyAPI(method) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return {
      type: _constants.HISTORY_API,
      payload: {
        method: method,
        args: args
      }
    };
  };
}

var pushState = historyAPI('pushState');
exports.pushState = pushState;
var replaceState = historyAPI('replaceState');
exports.replaceState = replaceState;
var setState = historyAPI('setState');
exports.setState = setState;
var go = historyAPI('go');
exports.go = go;
var goBack = historyAPI('goBack');
exports.goBack = goBack;
var goForward = historyAPI('goForward');
exports.goForward = goForward;