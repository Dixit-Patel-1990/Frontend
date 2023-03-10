import React, { Component } from "react";

class ErrorBoundry extends Component{

    constructor(props){
        super(props);
        this.state = {
            hasError: false
        }
    }

    static getDerivedStateFromError(error){
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log("Error ", error);
        console.log("Information ", info)
    }
    render(){
        const {hasError} = this.state;
        return (
            <>
                { hasError ? <h3>something went wrong </h3> : this.props.children }
            </>
        )
    }
}
export default ErrorBoundry;