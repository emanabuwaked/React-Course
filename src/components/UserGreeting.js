import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: true,
    };
  }

  // first way
  //   render() {
  //     if (this.state.userLoggedIn) {
  //       return <div>welcome Eman</div>;
  //     } else {
  //       return <div>welcome guest</div>;
  //     }
  //   }

  //second way
  //   render() {
  //     var message;
  //     if (this.state.userLoggedIn) {
  //       message = <div>welcome Eman</div>;
  //     } else {
  //       message = <div>welcome guest</div>;
  //     }
  //     return <div>{message}</div>;
  //   }

  // third way
  //   render() {
  //     return this.state.userLoggedIn ?
  //       <div>welcome Eman</div>:
  //       <div>welcome guest</div>
  //     ;
  //   }

  // fourth way
  render() {
    return this.state.userLoggedIn && <div>welcome Eman</div>;
  }
}

export default UserGreeting;
