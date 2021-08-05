'use strict';

exports.__esModule = true;
exports['default'] = reduxReactRouter;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _reactRouter = require('react-router');

var _historyMiddleware = require('./historyMiddleware');

var _historyMiddleware2 = _interopRequireDefault(_historyMiddleware);

var _constants = require('./constants');

function reduxReactRouter(_ref) {
  var routes = _ref.routes;
  var createHistory = _ref.createHistory;
  var parseQueryString = _ref.parseQueryString;
  var stringifyQuery = _ref.stringifyQuery;
  var routerStateSelector = _ref.routerStateSelector;

  return function (createStore) {
    return function (reducer, initialState) {
      var history = _reactRouter.useRoutes(createHistory)({
        routes: routes,
        parseQueryString: parseQueryString,
        stringifyQuery: stringifyQuery
      });

      var store = _redux.applyMiddleware(_historyMiddleware2['default'](history))(createStore)(reducer, initialState);

      store.history = history;
      store[_constants.ROUTER_STATE_SELECTOR] = routerStateSelector;

      return store;
    };
  };
}

module.exports = exports['default'];