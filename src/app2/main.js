const C1Lazy = React.lazy(() => import("./c1.js"));
const C2Lazy = React.lazy(() => import("./c2.js"));

const App2 = ({ routerProps }) => {
  const Switch = ReactRouterDOM.Switch;
  const Route = ReactRouterDOM.Route;
  console.log(routerProps);
  return (
    <Switch>
      <Route path={`${routerProps.match.path}/c1`} component={C1} />
      <Route path={`${routerProps.match.path}/c2`} component={C2} />
    </Switch>
  );
};

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

export default App2;
