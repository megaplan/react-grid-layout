'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // @noflow
// Intentional; Flow can't handle the bind on L20


/*
 * A simple HOC that provides facility for listening to container resizes.
 */

exports.default = function (ComposedComponent) {
  return function (_React$Component) {
    _inherits(_class2, _React$Component);

    function _class2() {
      var _temp, _this, _ret;

      _classCallCheck(this, _class2);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
        width: 1280
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _class2.prototype.componentDidMount = function componentDidMount() {
      var node = _reactDom2.default.findDOMNode(this);
      // Bind here so we have the same reference when removing the listener on unmount.
      this.onWindowResize = this._onWindowResize.bind(this, node);

      window.addEventListener('resize', this.onWindowResize);
      // This is intentional. Once to properly set the breakpoint and resize the elements,
      // and again to compensate for any scrollbar that appeared because of the first step.
      this.onWindowResize();
      this.onWindowResize();
    };

    _class2.prototype.componentWillUnmount = function componentWillUnmount() {
      window.removeEventListener('resize', this.onWindowResize);
    };

    _class2.prototype._onWindowResize = function _onWindowResize(node, _event) {
      this.setState({ width: node.offsetWidth });
    };

    _class2.prototype.render = function render() {
      return _react2.default.createElement(ComposedComponent, _extends({}, this.props, this.state));
    };

    return _class2;
  }(_react2.default.Component);
};