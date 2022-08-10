var C1Lazy = React.lazy(function () {
  return import("./c1.js");
});
var C2Lazy = React.lazy(function () {
  return import("./c2.js");
});

var App1 = function App1(_ref) {
  var routerProps = _ref.routerProps;

  var Switch = ReactRouterDOM.Switch;
  var Route = ReactRouterDOM.Route;
  console.log(routerProps);
  return React.createElement(
    Switch,
    null,
    React.createElement(Route, { path: routerProps.match.path + "/c1", component: C1 }),
    React.createElement(Route, { path: routerProps.match.path + "/c2", component: C2 })
  );
};

var C1 = function C1() {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement(
        "h2",
        null,
        "loading..."
      ) },
    React.createElement(C1Lazy, null)
  );
};

var C2 = function C2() {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement(
        "h2",
        null,
        "loading..."
      ) },
    React.createElement(C2Lazy, null)
  );
};

export default App1;