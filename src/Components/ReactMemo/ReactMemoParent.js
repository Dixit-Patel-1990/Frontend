import React, {Component} from "react";
import ReactMemoChild from "./ReactMemoChild";

class ReactMemoParent extends Component{

    constructor(props){
        super(props);
        this.state = {
            name:"Dixit"
        }
    }

    componentDidMount(){
        this.interval = setInterval(() => {
            this.setState({
                name: "Dixit"
            });
        }, 1000);
    }

    componentWillUnmount(){
        clearInterval(this.interval);
    }

    render(){
        console.log("******** Inside Parent Component *********");
        return (
            <ReactMemoChild name={this.state.name}/>
        );
    }
}
export default ReactMemoParent;