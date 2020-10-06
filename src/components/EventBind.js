import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "welcome to our website",
    };
    // this is related to the third way in line 28
    this.clickHandler = this.clickHandler.bind(this);
  }

  //we write the function in this way when we use the first, second, or third way
  //   clickHandler() {
  //     this.setState({
  //       message: "goodbye",
  //     });
  //     // console.log(this);
  //   }

  //we use this method when we use the fourth way
  clickHandler= ()=> {
    this.setState({
      message: "goodbye",
    });
    // console.log(this);
  }

  render() {
    return (
      <div>
        <p>{this.state.message}</p>

        {/* the first way to bind the method */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}

        {/* the second way to bind the method */}
        {/* <button onClick={()=>{this.clickHandler()}}>Click</button> */}

        {/* the third way to bind the method */}
        {/* <button onClick={this.clickHandler}>Click</button> */}

        {/* the fourth way to bind the method */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default EventBind;
