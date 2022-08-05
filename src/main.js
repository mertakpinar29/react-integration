"use strict";

const App1 = React.lazy(() => import("./app1/main.js"));
const App2 = React.lazy(() => import("./app2/main.js"));

class MainApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentApp: 1, currentComponent: 1 };
  }

  render() {
    // const changeApp = (val) => {
    //   if (this.state.showapp1 !== val) {
    //     console.log("x");
    //     this.setState({ showapp1: val });
    //   }
    // };

    document.querySelector(".a1c1-button").addEventListener("click", () => {
      this.setState({ currentApp: 1, currentComponent: 1 });
    });

    document.querySelector(".a1c2-button").addEventListener("click", () => {
      this.setState({ currentApp: 1, currentComponent: 2 });
    });

    document.querySelector(".a2c1-button").addEventListener("click", () => {
      this.setState({ currentApp: 2, currentComponent: 1 });
    });

    document.querySelector(".a2c2-button").addEventListener("click", () => {
      this.setState({ currentApp: 2, currentComponent: 2 });
    });

    if (this.state.currentApp === 1) {
      return (
        <React.Suspense fallback={<div>loading</div>}>
          <App1 currentComponent={this.state.currentComponent} />
        </React.Suspense>
      );
    } else if (this.state.currentApp === 2) {
      return (
        <React.Suspense fallback={<div>loading</div>}>
          <App2 currentComponent={this.state.currentComponent} />
        </React.Suspense>
      );
    }
  }
}

let domContainer = document.querySelector(".main");
ReactDOM.render(<MainApp />, domContainer);
