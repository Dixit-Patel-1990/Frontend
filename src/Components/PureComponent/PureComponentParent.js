import React, {PureComponent} from "react";
import PureComponentChild from "./PureComponentChild";

class PureComponentParent extends PureComponent{

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
            <PureComponentChild name={this.state.name}/>
        );
    }
}
export default PureComponentParent;