import React, { useState } from "react";

// class AddUserInfor extends React.Component {
//   state = { name: "QUY", age: 22 };

//   handleOnSubmit = (event) => {
//     //console.log("Random", Math.floor(Math.random() * 100) + 1);
//     // merge State => react class
//     event.preventDefault();
//     this.props.hanldleAddNewUser({
//       id: Math.floor(Math.random() * 100 + 1) + "-random",
//       name: this.state.name,
//       age: this.state.age,
//     });
//   };

//   handleOnChangeName = (event) => {
//     this.setState({
//       name: event.target.value,
//     });
//   };

//   handleOnChangeAge = (event) => {
//     this.setState({
//       age: event.target.value,
//     });
//   };
//   render() {
//     return (
//       <div>
//         My name is {this.state.name} and I'm from {this.state.age}
//         <form
//           onSubmit={(event) => {
//             this.handleOnSubmit(event);
//           }}
//         >
//           <label>Your name: </label>
//           <input
//             type="text"
//             value={this.state.name}
//             onChange={(event) => {
//               this.handleOnChangeName(event);
//             }}
//           ></input>
//           <br />
//           <label>Your age: </label>
//           <input
//             type="text"
//             value={this.state.age}
//             onChange={(event) => {
//               this.handleOnChangeAge(event);
//             }}
//           ></input>
//           <button>Submit</button>
//         </form>
//       </div>
//     );
//   }
// }

const AddUserInfor = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const handleOnSubmit = (event) => {
    // merge State => react class
    event.preventDefault();
    props.hanldleAddNewUser({
      id: Math.floor(Math.random() * 100 + 1) + "-random",
      name: name,
      age: age,
    });
  };

  const handleOnChangeName = (event) => {
    setName(event.target.value);
  };

  const handleOnChangeAge = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      My name is {name} and I'm from {age}
      <form
        onSubmit={(event) => {
          handleOnSubmit(event);
        }}
      >
        <label>Your name: </label>
        <input
          type="text"
          value={name}
          onChange={(event) => {
            handleOnChangeName(event);
          }}
        ></input>
        <br />
        <label>Your age: </label>
        <input
          type="text"
          value={age}
          onChange={(event) => {
            handleOnChangeAge(event);
          }}
        ></input>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default AddUserInfor;
