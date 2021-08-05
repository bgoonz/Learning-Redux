'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _ = require('../');

var _2 = _interopRequireDefault(_);

var _transducersJs = require('transducers.js');

var _transducersJs2 = _interopRequireDefault(_transducersJs);

var _transducersJs3 = require('transducers-js');

var _transducersJs4 = _interopRequireDefault(_transducersJs3);

// Mock createStore
function createStore(reducer, initialState) {
  var state = initialState;
  return {
    getState: function getState() {
      return state;
    },
    dispatch: function dispatch(action) {
      return state = reducer(state, action);
    }
  };
}

// Test with both transducers-js and transducers.js libraries
function testTransduce(compose, remove, filter, map) {
  var appendReducer = function appendReducer(state, action) {
    return {
      string: state.string + action.payload
    };
  };

  var reducer = _2['default'](compose(remove(function (action) {
    return !action;
  }), filter(function (action) {
    return action.type === 'APPEND';
  }), map(function (action) {
    return _extends({}, action, { payload: action.payload.toUpperCase() });
  })), appendReducer);

  var store = createStore(reducer, { string: '' });

  store.dispatch(null);
  store.dispatch({ type: 'APPEND', payload: 'a' });
  store.dispatch(undefined);
  store.dispatch({ type: 'APPEND', payload: 'b' });
  store.dispatch({ type: 'DONT_APPEND', payload: 'c' });
  store.dispatch({ type: 'APPEND', payload: 'd' });

  expect(store.getState()).to.deep.equal({ string: 'ABD' });
}

describe('transduce', function () {
  describe('creates a reducer from a transducer and a reducer', function () {
    it('works with transducers.js', function () {
      var compose = _transducersJs2['default'].compose;
      var remove = _transducersJs2['default'].remove;
      var filter = _transducersJs2['default'].filter;
      var map = _transducersJs2['default'].map;

      testTransduce(compose, remove, filter, map);
    });

    it('works with transducers-js', function () {
      var compose = _transducersJs4['default'].comp;
      var remove = _transducersJs4['default'].remove;
      var filter = _transducersJs4['default'].filter;
      var map = _transducersJs4['default'].map;

      testTransduce(compose, remove, filter, map);
    });
  });
});