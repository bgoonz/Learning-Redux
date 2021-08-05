'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _ = require('../');

var _server = require('../server');

var server = _interopRequireWildcard(_server);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDomServer = require('react-dom/server');

var _reactAddonsTestUtils = require('react-addons-test-utils');

var _reactRedux = require('react-redux');

var _redux = require('redux');

var _historyLibCreateMemoryHistory = require('history/lib/createMemoryHistory');

var _historyLibCreateMemoryHistory2 = _interopRequireDefault(_historyLibCreateMemoryHistory);

var _reactRouter = require('react-router');

var _mochaJsdom = require('mocha-jsdom');

var _mochaJsdom2 = _interopRequireDefault(_mochaJsdom);

var App = (function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, _App);

    _Component.apply(this, arguments);
  }

  App.prototype.render = function render() {
    var _props = this.props;
    var location = _props.location;
    var children = _props.children;

    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(
        'p',
        null,
        'Pathname: ' + location.pathname
      ),
      children
    );
  };

  _createClass(App, null, [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node,
      location: _react.PropTypes.object
    },
    enumerable: true
  }]);

  var _App = App;
  App = _reactRedux.connect(function (state) {
    return state.router;
  })(App) || App;
  return App;
})(_react.Component);

var Parent = (function (_Component2) {
  _inherits(Parent, _Component2);

  function Parent() {
    _classCallCheck(this, Parent);

    _Component2.apply(this, arguments);
  }

  Parent.prototype.render = function render() {
    return _react2['default'].createElement(
      'div',
      null,
      _react2['default'].createElement(_reactRouter.Link, { to: '/parent/child/321', query: { key: 'value' } }),
      this.props.children
    );
  };

  _createClass(Parent, null, [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node
    },
    enumerable: true
  }]);

  return Parent;
})(_react.Component);

var Child = (function (_Component3) {
  _inherits(Child, _Component3);

  function Child() {
    _classCallCheck(this, Child);

    _Component3.apply(this, arguments);
  }

  Child.prototype.render = function render() {
    return _react2['default'].createElement('div', null);
  };

  return Child;
})(_react.Component);

function redirectOnEnter(pathname) {
  return function (routerState, replaceState) {
    return replaceState(null, pathname);
  };
}

var routes = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/', component: App, onEnter: redirectOnEnter },
  _react2['default'].createElement(
    _reactRouter.Route,
    { path: 'parent', component: Parent },
    _react2['default'].createElement(_reactRouter.Route, { path: 'child', component: Child }),
    _react2['default'].createElement(_reactRouter.Route, { path: 'child/:id', component: Child })
  ),
  _react2['default'].createElement(_reactRouter.Route, { path: 'redirect', onEnter: redirectOnEnter('/parent/child/850') })
);

describe('<ReduxRouter>', function () {
  _mochaJsdom2['default']();

  function renderApp() {
    var reducer = _redux.combineReducers({
      router: _.routerStateReducer
    });

    var history = _historyLibCreateMemoryHistory2['default']();
    var store = _.reduxReactRouter({
      history: history
    })(_redux.createStore)(reducer);

    history.pushState(null, '/parent/child/123?key=value');

    return _reactAddonsTestUtils.renderIntoDocument(_react2['default'].createElement(
      _reactRedux.Provider,
      { store: store },
      _react2['default'].createElement(
        _.ReduxRouter,
        null,
        routes
      )
    ));
  }

  it('renders a React Router app using state from a Redux <Provider>', function () {
    var tree = renderApp();

    var child = _reactAddonsTestUtils.findRenderedComponentWithType(tree, Child);
    expect(child.props.location.pathname).to.equal('/parent/child/123');
    expect(child.props.location.query).to.eql({ key: 'value' });
    expect(child.props.params).to.eql({ id: '123' });
  });

  // <Link> does stuff inside `onClick` that makes it difficult to test.
  // They work in the example.
  // TODO: Refer to React Router tests once they're completed
  it.skip('works with <Link>', function () {
    var tree = renderApp();

    var child = _reactAddonsTestUtils.findRenderedComponentWithType(tree, Child);
    expect(child.props.location.pathname).to.equal('/parent/child/123');
    var link = _reactAddonsTestUtils.findRenderedDOMComponentWithTag(tree, 'a');

    _reactAddonsTestUtils.Simulate.click(link);
    expect(child.props.location.pathname).to.equal('/parent/child/321');
  });

  describe('server-side rendering', function () {
    it('works', function () {
      var reducer = _redux.combineReducers({
        router: _.routerStateReducer
      });

      var store = server.reduxReactRouter({ routes: routes })(_redux.createStore)(reducer);
      store.dispatch(server.match('/parent/child/850', function () {
        var output = _reactDomServer.renderToString(_react2['default'].createElement(
          _reactRedux.Provider,
          { store: store },
          _react2['default'].createElement(_.ReduxRouter, null)
        ));
        expect(output).to.match(/Pathname: \/parent\/child\/850/);
      }));
    });

    it('throws if routes are not passed to store enhancer', function () {
      var reducer = _redux.combineReducers({
        router: _.routerStateReducer
      });

      expect(function () {
        return server.reduxReactRouter()(_redux.createStore)(reducer);
      }).to['throw']('When rendering on the server, routes must be passed to the ' + 'reduxReactRouter() store enhancer; routes as a prop or as children ' + 'of <ReduxRouter> is not supported. To deal with circular ' + 'dependencies between routes and the store, use the ' + 'option getRoutes(store).');
    });

    it('handles redirects', function () {
      var reducer = _redux.combineReducers({
        router: _.routerStateReducer
      });

      var store = server.reduxReactRouter({ routes: routes })(_redux.createStore)(reducer);
      store.dispatch(server.match('/redirect', function (error, redirectLocation) {
        expect(error).to.be['null'];
        expect(redirectLocation.pathname).to.equal('/parent/child/850');
      }));
    });
  });

  describe('dynamic route switching', function () {
    it('updates routes wnen <ReduxRouter> receives new props', function () {
      var newRoutes = _react2['default'].createElement(_reactRouter.Route, { path: '/parent/:route', component: App });

      var reducer = _redux.combineReducers({
        router: _.routerStateReducer
      });

      var history = _historyLibCreateMemoryHistory2['default']();
      var store = _.reduxReactRouter({ history: history })(_redux.createStore)(reducer);

      var RouterContainer = (function (_Component4) {
        _inherits(RouterContainer, _Component4);

        function RouterContainer() {
          _classCallCheck(this, RouterContainer);

          _Component4.apply(this, arguments);

          this.state = { routes: routes };
        }

        RouterContainer.prototype.render = function render() {
          return _react2['default'].createElement(
            _reactRedux.Provider,
            { store: store },
            _react2['default'].createElement(_.ReduxRouter, { routes: this.state.routes })
          );
        };

        return RouterContainer;
      })(_react.Component);

      history.pushState(null, '/parent/child');
      var tree = _reactAddonsTestUtils.renderIntoDocument(_react2['default'].createElement(RouterContainer, null));

      expect(store.getState().router.params).to.eql({});
      tree.setState({ routes: newRoutes });
      expect(store.getState().router.params).to.eql({ route: 'child' });
    });
  });
});