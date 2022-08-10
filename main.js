var App1Lazy = React.lazy(function () {
  return import("./app1/main.js");
});
var App2Lazy = React.lazy(function () {
  return import("./app2/main.js");
});

var Link = ReactRouterDOM.Link;
var Route = ReactRouterDOM.Route;

console.log(ReactRouterDOM);

var MainApp = function MainApp() {
  return React.createElement(
    ReactRouterDOM.HashRouter,
    null,
    React.createElement(Route, { path: "/", exact: true, component: Home }),
    React.createElement(Route, { path: "/app1", component: App1 }),
    React.createElement(Route, { path: "/app2", component: App2 })
  );
};

var Home = function Home() {
  return React.createElement(
    "h1",
    null,
    "HomePage"
  );
};
var App1 = function App1(props) {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement(
        "h2",
        null,
        "loading.."
      ) },
    React.createElement(App1Lazy, { routerProps: props })
  );
};
var App2 = function App2(props) {
  return React.createElement(
    React.Suspense,
    { fallback: React.createElement(
        "h2",
        null,
        "loading.."
      ) },
    React.createElement(App2Lazy, { routerProps: props })
  );
};

ReactDOM.render(React.createElement(MainApp, null), document.querySelector(".main"));