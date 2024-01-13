// class component
// function component

import React from "react";

class MyComponent extends React.Component {
  state = { name: "QUY", address: "TDC", age: 22 };

  handleOnSubmit = (event) => {
    //console.log("Random", Math.floor(Math.random() * 100) + 1);
    // merge State => react class
    event.preventDefault();
    console.log(this.state);
  };

  handleOnChangeInput = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.address}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <input
            type="text"
            onChange={(event) => {
              this.handleOnChangeInput(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default MyComponent;
