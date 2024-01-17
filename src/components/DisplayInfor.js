import "./DisplayInfor.scss";
import React, { useState } from "react";

// stateless vs stateful
// class DisplayInfor extends React.Component {
//   //template + logic js
//   render() {
//     // destructuring array/object
//     const { listUsers } = this.props;
//     // props: viet tat properties
//     return (
//       <div className="display-info-container">
//         <div>Show list users</div>
//         {true && (
//           <>
//             {listUsers.map((item) => {
//               return (
//                 <div
//                   key={item.id}
//                   className={+item.age <= 16 ? "green" : "red"}
//                 >
//                   <p>
//                     My name's {item.name} and my age's {item.age}
//                   </p>
//                   <button onClick={() => this.props.hanldleDeleteUser(item.id)}>
//                     Delete
//                   </button>
//                   <hr />
//                 </div>
//               );
//             })}
//           </>
//         )}
//       </div>
//     );
//   }
// }

const DisplayInfor = (props) => {
  const { listUsers } = props;
  const [isShowOrHide, setShowOrHide] = useState(true);
  const hanldleShowOrHide = () => {
    setShowOrHide(!isShowOrHide);
  };
  //template + logic js
  // props: viet tat properties
  return (
    <div className="display-info-container">
      <div>
        <span
          onClick={() => {
            hanldleShowOrHide();
          }}
        >
          {isShowOrHide ? "Show" : "Hide"} list users
        </span>
      </div>
      {isShowOrHide && (
        <>
          {listUsers.map((item) => {
            return (
              <div key={item.id} className={+item.age <= 16 ? "green" : "red"}>
                <p>
                  My name's {item.name} and my age's {item.age}
                </p>
                <button onClick={() => props.hanldleDeleteUser(item.id)}>
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
};

export default DisplayInfor;
