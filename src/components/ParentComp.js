import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp';
import PureComp from "./PureComp"
import RegComp from "./RegComp"

export class ParentComp extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "eman",
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        name: "eman",
      });
    }, 2000);
  }

  render() {
    console.log("Parent component");
    return (
      <div>
        <p>Parent component</p>
        {/* <RegComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
        <MemoComp name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp
