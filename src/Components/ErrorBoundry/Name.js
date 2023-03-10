const Name = (props) => {

    const { name } = props;
    if (name === "Patel") {
        throw new Error("This is not a valid name")
    }

    return (
        <>
            {name}
        </>
    );
}
export default Name;