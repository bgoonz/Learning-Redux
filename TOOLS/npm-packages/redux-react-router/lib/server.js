'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.match = match;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _historyLibCreateMemoryHistory = require('history/lib/createMemoryHistory');

var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

var _reduxReactRouter = require('./reduxReactRouter');

var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);

var _useDefaults = require('./useDefaults');

var _useDefaults2 = _interopRequireDefault(_useDefaults);

var _routeReplacement = require('./routeReplacement');

var _routeReplacement2 = _interopRequireDefault(_routeReplacement);

var _matchMiddleware = require('./matchMiddleware');

var _matchMiddleware2 = _interopRequireDefault(_matchMiddleware);

var _constants = require('./constants');

function serverInvariants(next) {
  return function (options) {
    return function (createStore) {
      if (!options || !(options.routes || options.getRoutes)) {
        throw new Error('When rendering on the server, routes must be passed to the ' + 'reduxReactRouter() store enhancer; routes as a prop or as children of ' + '<ReduxRouter> is not supported. To deal with circular dependencies ' + 'between routes and the store, use the option getRoutes(store).');
      }

      return next(options)(createStore);
    };
  };
}

function matching(next) {
  return function (options) {
    return function (createStore) {
      return function (reducer, initialState) {
        var store = _redux.compose(_redux.applyMiddleware(_matchMiddleware2['default'](function () {
          var _store$history;

          return (_store$history = store.history).match.apply(_store$history, arguments);
        })), next(_extends({}, options, {
          createHistory: options.createHistory || _historyLibCreateMemoryHistory2['default']
        })))(createStore)(reducer, initialState);
        return store;
      };
    };
  };
}

function match(url, callback) {
  return {
    type: _constants.MATCH,
    payload: {
      url: url,
      callback: callback
    }
  };
}

var reduxReactRouter = _redux.compose(serverInvariants, _useDefaults2['default'], _routeReplacement2['default'], matching)(_reduxReactRouter2['default']);
exports.reduxReactRouter = reduxReactRouter;