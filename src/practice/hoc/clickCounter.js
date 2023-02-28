import React from 'react';
import counterHOC from './counterHOC';

const ClickCounter = (props) => {
   
    return(
        <>
         <button onClick={props.increamentCount}> You clicked me {props.counter} times </button>
        </>
    );
}

export default counterHOC(ClickCounter);