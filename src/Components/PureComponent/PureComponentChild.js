const PureComponentChild = (props) => {

    console.log("******** Inside Child Component *********");
    return (
        <>
            <h1> { props.name } </h1>
        </>
    );
}
export default PureComponentChild;