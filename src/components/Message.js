import React, { Component } from "react";

export class Message extends Component {
  constructor() {
    super();
    this.state = {
      message: "Welcome visitors",
    };
  }

  changeMessage(){
      this.setState({
        message: "Thank you for subs cribe",
      });
  }
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick ={()=>this.changeMessage()}>subscribe</button>
      </div>
    );
  }
}
