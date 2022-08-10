const App1Lazy = React.lazy(() => import("./app1/main.js"));
const App2Lazy = React.lazy(() => import("./app2/main.js"));

const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

console.log(ReactRouterDOM);

const MainApp = () => (
  <ReactRouterDOM.HashRouter>
    <Route path="/" exact component={Home} />
    <Route path="/app1" component={App1} />
    <Route path="/app2" component={App2} />
  </ReactRouterDOM.HashRouter>
);

const Home = () => <h1>HomePage</h1>;
const App1 = (props) => (
  <React.Suspense fallback={<h2>loading..</h2>}>
    <App1Lazy routerProps={props} />
  </React.Suspense>
);
const App2 = (props) => (
  <React.Suspense fallback={<h2>loading..</h2>}>
    <App2Lazy routerProps={props} />
  </React.Suspense>
);

ReactDOM.render(<MainApp />, document.querySelector(".main"));
