import React from "react";
import "./App.scss";
import { Register } from "./components/Register";

class App extends React.Component {
  render() {
    // const { isLogginActive } = this.state;
    // const current = isLogginActive ? "Register" : "Login";
    // const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="App">
        <div className="login">
          <div className="container" ref={ref => (this.container = ref)}>
            <Register containerRef={ref => (this.current = ref)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
