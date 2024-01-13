// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = { name: "QUY", address: "TDC", age: 22 };

  handleClick(event) {
    console.log("Random", Math.floor(Math.random() * 100) + 1);
    // merge State => react class
    // this.setState({
    //   name: "Q U Y",
    // });
  }

  handleOnMouseOver(event) {
    console.log(event);
  }

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <button
          onClick={(event) => {
            this.handleClick(event);
          }}
        >
          Click
        </button>
      </div>
    );
  }
}

export default MyComponent;
