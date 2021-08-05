'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actionTypes = require('./actionTypes');

var middleware = function middleware(load) {
  return function (store) {
    var dispatch = store.dispatch,
        getState = store.getState;

    var handleLoad = function handleLoad() {
      middleware.isLoadExecuted = true;

      if (typeof load !== 'function') {
        return;
      }

      dispatch({
        type: _actionTypes.STATE_LOADING_START
      });

      load(getState, dispatch).then(function (state) {
        dispatch({
          type: _actionTypes.STATE_LOADING_DONE,
          payload: {
            state: state
          }
        });
      }, function (error) {
        dispatch({
          type: _actionTypes.STATE_LOADING_FAILED,
          payload: {
            error: error
          }
        });
      });
    };

    return function (next) {
      return function (action) {
        !middleware.isLoadExecuted && handleLoad();
        next(action);
      };
    };
  };
};

exports.default = middleware;