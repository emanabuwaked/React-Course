import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
          hasError: false
        };
    }
    

    static getDerivedStateFromError (error){
        return {
            hasError:true
        }
    }

    componentDidCatch(error,info){
        console.log(error);
        console.log(info);
    }
    render() {
        // return (
        //     <div>
                
        //     </div>
        // )
        if (this.state.hasError){
            return <h1>there is something wrong</h1>
        }else{
            return this.props.children 
        }
    }
}

export default ErrorBoundary
