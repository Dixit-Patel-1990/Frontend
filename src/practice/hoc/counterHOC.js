import React from "react";

const CounterHOC = (OldComponent) => {

    class NewComponent extends React.Component {

        constructor(props){
            super(props);
            this.state = {
                counter: 0
            }
        }

        increamentCount = () =>{
            this.setState((prevState) => {
                return {counter: prevState.counter+1}
            });
        }
        render() {
            return (
                <OldComponent counter={this.state.counter} increamentCount={this.increamentCount}/>
            );
        }
    }
    return NewComponent;
}
export default CounterHOC;