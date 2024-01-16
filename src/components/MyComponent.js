// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: "1", name: "QUY", age: "16" },
      { id: "2", name: "QUY1", age: "21" },
      { id: "3", name: "QUY2", age: "21" },
    ],
  };

  hanldleAddNewUser = (userObj) => {
    console.log(userObj);
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };
  // JSX
  render() {
    return (
      <div>
        <AddUserInfor hanldleAddNewUser={this.hanldleAddNewUser} />
        <DisplayInfor listUsers={this.state.listUsers} />
      </div>
    );
  }
}

export default MyComponent;
