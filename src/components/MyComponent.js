// class component
// function component

import React from "react";
import AddUserInfor from "./AddUserInfor";
import DisplayInfor from "./DisplayInfor";

class MyComponent extends React.Component {
  state = {
    listUsers: [
      { id: 1, name: "QUY", age: "16" },
      { id: 2, name: "QUY1", age: "21" },
      { id: 3, name: "QUY2", age: "21" },
    ],
  };

  hanldleAddNewUser = (userObj) => {
    this.setState({
      listUsers: [userObj, ...this.state.listUsers],
    });
  };

  hanldleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    listUsersClone = listUsersClone.filter((item) => item.id !== userId);
    this.setState({
      listUsers: listUsersClone,
    });
  };

  // JSX
  render() {
    //DRY: don't repeat youself

    // Variables with JSX: console.log() and JSON.stringify()

    return (
      <>
        <AddUserInfor hanldleAddNewUser={this.hanldleAddNewUser} />
        <DisplayInfor
          listUsers={this.state.listUsers}
          hanldleDeleteUser={this.hanldleDeleteUser}
        />
      </>
    );
  }
}

export default MyComponent;
