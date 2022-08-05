"use strict";

const C1 = React.lazy(() => import("./c1.js"));
const C2 = React.lazy(() => import("./c2.js"));

class AppOne extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.currentComponent === 1) {
      return (
        <React.Suspense fallback={<div>loading</div>}>
          <C1 />
        </React.Suspense>
      );
    } else if (this.props.currentComponent === 2) {
      return (
        <React.Suspense fallback={<div>loading</div>}>
          <C2 />
        </React.Suspense>
      );
    }
  }
}

export default AppOne;
