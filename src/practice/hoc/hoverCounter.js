import React from 'react';
import counterHOC from './counterHOC';

const HoverCounter = (props) => {

    console.log(props);
    return (
        <>
            <p onMouseOver={props.increamentCount}> Hello Dixit you hovered on me {props.counter} times.</p>
        </>
    );
}

export default counterHOC(HoverCounter);