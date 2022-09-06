const C1Lazy = React.lazy(() => import("./c1.js"));
const C2Lazy = React.lazy(() => import("./c2.js"));

const App1 = ({ routerProps }) => {
  const Switch = ReactRouterDOM.Switch;
  const Route = ReactRouterDOM.Route;
  console.log(routerProps);
  /* Creating another Router inside App1. That way I have implemented nested routing.
     /app1 will have router inside, so if user is on /app1/c1 he/she is going to 
     see Component1, on /app1/c2 Component2.
  */
  return (
    <Switch>
      {/* on /app1/c1 C1 will be rendered  */}
      <Route path={`${routerProps.match.path}/c1`} component={C1} />
      {/* on /app1/c1 C2 will be rendered  */}
      <Route path={`${routerProps.match.path}/c2`} component={C2} />
    </Switch>
  );
};

/* Creating Component for App1 using React.Suspense since we are loading c1.js using Lazy  */
const C1 = () => (
  <React.Suspense fallback={<h2>loading...</h2>}>
    <C1Lazy />
  </React.Suspense>
);

const C2 = () => (
  <React.Suspense fallback={<h2>loading...</h2>}>
    <C2Lazy />
  </React.Suspense>
);

export default App1;
