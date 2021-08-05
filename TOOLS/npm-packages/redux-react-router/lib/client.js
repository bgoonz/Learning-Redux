'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _redux = require('redux');

var _actionCreators = require('./actionCreators');

var _routerStateEquals = require('./routerStateEquals');

var _routerStateEquals2 = _interopRequireDefault(_routerStateEquals);

var _reduxReactRouter = require('./reduxReactRouter');

var _reduxReactRouter2 = _interopRequireDefault(_reduxReactRouter);

var _useDefaults = require('./useDefaults');

var _useDefaults2 = _interopRequireDefault(_useDefaults);

var _routeReplacement = require('./routeReplacement');

var _routeReplacement2 = _interopRequireDefault(_routeReplacement);

function historySynchronization(next) {
  return function (options) {
    return function (createStore) {
      return function (reducer, initialState) {
        var onError = options.onError;
        var routerStateSelector = options.routerStateSelector;

        var store = next(options)(createStore)(reducer, initialState);
        var history = store.history;

        var routerState = undefined;

        history.listen(function (error, nextRouterState) {
          if (error) {
            onError(error);
            return;
          }

          var prevRouterState = routerStateSelector(store.getState());

          if (!_routerStateEquals2['default'](prevRouterState, nextRouterState)) {
            store.dispatch(_actionCreators.routerDidChange(nextRouterState));
          }
        });

        store.subscribe(function () {
          var nextRouterState = routerStateSelector(store.getState());

          if (nextRouterState && !_routerStateEquals2['default'](routerState, nextRouterState)) {
            var _nextRouterState$location = nextRouterState.location;
            var state = _nextRouterState$location.state;
            var pathname = _nextRouterState$location.pathname;
            var query = _nextRouterState$location.query;

            history.replaceState(state, pathname, query);
          }

          routerState = nextRouterState;
        });

        return store;
      };
    };
  };
}

exports['default'] = _redux.compose(_useDefaults2['default'], _routeReplacement2['default'], historySynchronization)(_reduxReactRouter2['default']);
module.exports = exports['default'];