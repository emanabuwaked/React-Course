import React, { Component } from "react";

class ClassClick extends Component {
  clickHandler() {
    console.log("click the button ");
  }
  render() {
    return (
      <div>
        We are in ClassClick Component.
        <button onClick={this.clickHandler}>Click me</button>
      </div>
    );
  }
}

export default ClassClick;
