import "./DisplayInfor.scss";
import React from "react";

class DisplayInfor extends React.Component {
  state = {
    isShowOrHide: true,
  };
  handleShowHide = () => {
    this.setState({
      isShowOrHide: !this.state.isShowOrHide,
    });
  };

  //template + logic js
  render() {
    // destructuring array/object
    const { listUsers } = this.props;
    // props: viet tat properties
    return (
      <div className="display-info-container">
        <div>
          <span
            onClick={() => {
              this.handleShowHide();
            }}
          >
            {this.state.isShowOrHide === true ? "Hide" : "Show"} list user
          </span>
        </div>
        {this.state.isShowOrHide && (
          <>
            {listUsers.map((item) => {
              return (
                <div
                  key={item.id}
                  className={+item.age <= 16 ? "green" : "red"}
                >
                  <p>
                    My name's {item.name} and my age's {item.age}
                  </p>
                  <button onClick={() => this.props.hanldleDeleteUser(item.id)}>
                    Delete
                  </button>
                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
