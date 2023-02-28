import React from 'react';
import HoverCounter from './hoverCounter';
import ClickCounter from './clickCounter';

const ParentHOC = () => {

    return(
        <>
        <HoverCounter/>
        <ClickCounter/>
        </>
    );
}

export default ParentHOC;