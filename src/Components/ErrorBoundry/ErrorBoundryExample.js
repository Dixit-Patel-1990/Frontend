import Name from "./Name";
import ErrorBoundry from "./ErrorBoundry";
const ErrorBoundryExample = (props) => {
  return (
    <>
      <h1> This is an example of Error Boundry</h1>
      <ErrorBoundry>
        <Name name="Dixit" />
      </ErrorBoundry>
      <ErrorBoundry>
        <Name name="Patel" />
      </ErrorBoundry>
    </>
  );
};
export default ErrorBoundryExample;
