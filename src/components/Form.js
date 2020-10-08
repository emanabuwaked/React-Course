import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: "",
      comment: "",
      topic: "angular",
    };
  }

  handleUserNameChange = (event) => {
    this.setState({
      userName: event.target.value,
    });
  };

  handleCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };

  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.value,
    });
    console.log(event.target.value);
  };

  handleSubmit = (event)=>{
      alert("you submit")
    //   event.preventDefault()
  }
  render() {
    return (
      <form onSubmit ={this.handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="text"
            value={this.state.userName}
            onChange={this.handleUserNameChange}
          ></input>
        </div>

        <div>
          <label>Comment:</label>
          <textarea
            value={this.state.comment}
            onChange={this.handleCommentChange}
          ></textarea>
        </div>

        <div>
          <lable>Topic:</lable>
          <select value={this.state.topic} onChang={this.handleTopicChange}>
            <option value="react"> react</option>
            <option value="angular">angular</option>
          </select>
        </div>

        <button type ="submit">submit</button>
      </form>
    );
  }
}

export default Form;
