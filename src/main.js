/* Lazy imports the component only when its going to be used. My supervisor wanted me to
   import components on runtime since OLGU's application systems contain lots of components
   and loading all of them at application boot may cause performance issues.
*/
const App1Lazy = React.lazy(() => import("./app1/main.js"));
const App2Lazy = React.lazy(() => import("./app2/main.js"));

/* Grabbing Link and Route elements from react-router-dom package */
const Link = ReactRouterDOM.Link;
const Route = ReactRouterDOM.Route;

console.log(ReactRouterDOM);

/* Creating the main application, using JSX.
   Using HashRouter from react-router-dom package will allow use to
   create endpoints for our application and render desired components
   on those endpoints.
*/
const MainApp = () => (
  <ReactRouterDOM.HashRouter>
    {/* Wrapping Routes with HashRouter, 
    defining the components that will be rendered on specific endpoints. */}
    <Route path="/" exact component={Home} />
    <Route path="/app1" component={App1} />
    <Route path="/app2" component={App2} />
  </ReactRouterDOM.HashRouter>
);

// Home component will be rendered on homepage
const Home = () => <h1>HomePage</h1>;
/* React.Suspense will show loading.. message if component is not loaded yet,
   since we are using Lazy Load, our components will be rendered only when needed.
   That's why our app may not have the component loaded when we switch to a page for the first time.
   After our components is loaded, loading message won't be showed anymore, React.Suspense is going to
   show the component that is wrapped with it.
*/
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

/* Render the MainApp functional component in a div that has "main" as its id. */
ReactDOM.render(<MainApp />, document.querySelector(".main"));
