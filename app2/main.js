"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C1 = React.lazy(function () {
  return import("./c1.js");
});
var C2 = React.lazy(function () {
  return import("./c2.js");
});

var AppTwo = function (_React$Component) {
  _inherits(AppTwo, _React$Component);

  function AppTwo(props) {
    _classCallCheck(this, AppTwo);

    var _this = _possibleConstructorReturn(this, (AppTwo.__proto__ || Object.getPrototypeOf(AppTwo)).call(this, props));

    _this.state = { showc1: true };
    return _this;
  }

  _createClass(AppTwo, [{
    key: "render",
    value: function render() {
      if (this.props.currentComponent === 1) {
        return React.createElement(
          React.Suspense,
          { fallback: React.createElement(
              "div",
              null,
              "loading"
            ) },
          React.createElement(C1, null)
        );
      } else if (this.props.currentComponent === 2) {
        return React.createElement(
          React.Suspense,
          { fallback: React.createElement(
              "div",
              null,
              "loading"
            ) },
          React.createElement(C2, null)
        );
      }
    }
  }]);

  return AppTwo;
}(React.Component);

export default AppTwo;