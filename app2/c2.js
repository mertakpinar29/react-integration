"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var C2 = function (_React$Component) {
  _inherits(C2, _React$Component);

  function C2(props) {
    _classCallCheck(this, C2);

    return _possibleConstructorReturn(this, (C2.__proto__ || Object.getPrototypeOf(C2)).call(this, props));
  }

  _createClass(C2, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        {
          style: {
            display: "flex",
            alignItems: "center",
            padding: 30,
            justifyContent: "space-around",
            width: "100%"
          }
        },
        React.createElement("img", {
          width: "300px",
          src: "https://thumbs.dreamstime.com/b/cosmos-beauty-deep-space-elements-image-furnished-nasa-science-fiction-art-102581846.jpg"
        }),
        React.createElement(
          "h2",
          null,
          "This is the second component of first second"
        )
      );
    }
  }]);

  return C2;
}(React.Component);

export default C2;