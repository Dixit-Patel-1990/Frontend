import React, { Component } from "react";

class ShouldComponentUpdateExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }));
  }

  shouldComponentUpdate(nextProp, nextState){
    console.log("nextState", nextState);
    console.log("nextProp", nextProp);
    return true;
  }
  render() {
    return (
      <>
        <h1> Count : {this.state.count}</h1>
        <button onClick={this.handleClick}> Increment Count </button>
      </>
    );
  }
}
export default ShouldComponentUpdateExample;