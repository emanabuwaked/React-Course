import React, { Component } from 'react'
import UpdateComponent from "./withCounter"

class ClickCounter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }

// incrementCount=()=>{
// this.setState((prevState)=>{
// return {count: prevState.count+1}
// })
// }

incrementCount=()=>{
this.setState({
    count: this.state.count+1
})
}


    render() {
        return (
            <div>
                <button onClick ={this.incrementCount}>Click {this.state.count} times, name is {this.props.name}</button>
            </div>
        )
    }
}

export default UpdateComponent(ClickCounter) 
