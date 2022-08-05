"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App1 = React.lazy(function () {
  return import("./app1/main.js");
});
var App2 = React.lazy(function () {
  return import("./app2/main.js");
});

var MainApp = function (_React$Component) {
  _inherits(MainApp, _React$Component);

  function MainApp(props) {
    _classCallCheck(this, MainApp);

    var _this = _possibleConstructorReturn(this, (MainApp.__proto__ || Object.getPrototypeOf(MainApp)).call(this, props));

    _this.state = { currentApp: 1, currentComponent: 1 };
    return _this;
  }

  _createClass(MainApp, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      // const changeApp = (val) => {
      //   if (this.state.showapp1 !== val) {
      //     console.log("x");
      //     this.setState({ showapp1: val });
      //   }
      // };

      document.querySelector(".a1c1-button").addEventListener("click", function () {
        _this2.setState({ currentApp: 1, currentComponent: 1 });
      });

      document.querySelector(".a1c2-button").addEventListener("click", function () {
        _this2.setState({ currentApp: 1, currentComponent: 2 });
      });

      document.querySelector(".a2c1-button").addEventListener("click", function () {
        _this2.setState({ currentApp: 2, currentComponent: 1 });
      });

      document.querySelector(".a2c2-button").addEventListener("click", function () {
        _this2.setState({ currentApp: 2, currentComponent: 2 });
      });

      if (this.state.currentApp === 1) {
        return React.createElement(
          React.Suspense,
          { fallback: React.createElement(
              "div",
              null,
              "loading"
            ) },
          React.createElement(App1, { currentComponent: this.state.currentComponent })
        );
      } else if (this.state.currentApp === 2) {
        return React.createElement(
          React.Suspense,
          { fallback: React.createElement(
              "div",
              null,
              "loading"
            ) },
          React.createElement(App2, { currentComponent: this.state.currentComponent })
        );
      }
    }
  }]);

  return MainApp;
}(React.Component);

var domContainer = document.querySelector(".main");
ReactDOM.render(React.createElement(MainApp, null), domContainer);