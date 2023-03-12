import React from "react";

const ReactMemoChild = (props) => {
  console.log("******** Inside Child Component *********");
  return (
    <>
      <h1> {props.name} </h1>
    </>
  );
};
export default React.memo(ReactMemoChild);
