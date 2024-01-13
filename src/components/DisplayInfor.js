import React from "react";

class DisplayInfor extends React.Component {
  render() {
    // destructuring array/object
    const { listUsers } = this.props;
    // props: viet tat properties
    console.log(this.props);
    return (
      <div>
        {listUsers.map((item) => {
          return (
            <div key={item.id}>
              My name's {item.name} and my age's {item.age}
            </div>
          );
        })}
      </div>
    );
  }
}

export default DisplayInfor;
