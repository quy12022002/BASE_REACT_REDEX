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
          <div>
            {listUsers.map((item) => {
              return (
                <div
                  key={item.id}
                  className={+item.age <= 16 ? "green" : "red"}
                >
                  My name's {item.name} and my age's {+item.age}
                  <hr />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  }
}

export default DisplayInfor;
