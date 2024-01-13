import React from "react";

class UserInfor extends React.Component {
  state = { name: "QUY", address: "TDC", age: 22 };

  handleOnSubmit = (event) => {
    //console.log("Random", Math.floor(Math.random() * 100) + 1);
    // merge State => react class
    event.preventDefault();
    console.log(this.state);
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleOnChangeAge = (event) => {
    this.setState({
      age: event.target.value,
    });
  };
  render() {
    return (
      <div>
        My name is {this.state.name} and I'm from {this.state.age}
        <form
          onSubmit={(event) => {
            this.handleOnSubmit(event);
          }}
        >
          <label>Your name: </label>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => {
              this.handleOnChangeName(event);
            }}
          ></input>
          <br />
          <label>Your age: </label>
          <input
            type="text"
            value={this.state.age}
            onChange={(event) => {
              this.handleOnChangeAge(event);
            }}
          ></input>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default UserInfor;
