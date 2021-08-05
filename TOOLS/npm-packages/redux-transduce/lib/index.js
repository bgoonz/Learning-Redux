'use strict';

exports.__esModule = true;
exports['default'] = transduce;
var STEP = '@@transducer/step';
var RESULT = '@@transducer/result';

function identity(t) {
  return t;
}

function transduce(xform) {
  var reducer = arguments[1] === undefined ? identity : arguments[1];

  return function (state, action) {
    var _xform;

    var transducer = xform((_xform = {}, _xform[STEP] = reducer, _xform[RESULT] = identity, _xform));
    var result = transducer[STEP](state, action);
    return transducer[RESULT](result);
  };
}

module.exports = exports['default'];