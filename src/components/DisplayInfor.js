import "./DisplayInfor.scss";
import React from "react";

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
  // destructuring array/object
  const { listUsers } = props;
  //template + logic js
  // props: viet tat properties
  return (
    <div className="display-info-container">
      <div>Show list users</div>
      {true && (
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
