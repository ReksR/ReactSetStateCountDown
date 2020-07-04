import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "Rekha !!", count: 0 };
    this.Hclick = this.Hclick.bind(this);
  }

  Hclick() {
    this.setState(mystate => {
      return { count: mystate.count + 1 };
    });
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "purple",
          fontFamily: "verdana",
          fontSize: "10"
        }}
      >
        <h1> Hi {this.state.name}</h1>
        <h1> Lets start the count down </h1>
        <h1>{this.state.count}</h1>
        <br />
        <button align="center" onClick={this.Hclick}>
          {" "}
          Click Me{" "}
        </button>
      </div>
    );
  }
}

export default App;
