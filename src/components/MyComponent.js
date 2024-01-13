// class component
// function component

import React from "react";
import UserInfor from "./UserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "QUY", age: 16 },
      { id: 2, name: "QUY1", age: 21 },
      { id: 3, name: "QUY2", age: 21 },
    ],
  };
  // JSX
  render() {
    return (
      <div>
        <UserInfor />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
