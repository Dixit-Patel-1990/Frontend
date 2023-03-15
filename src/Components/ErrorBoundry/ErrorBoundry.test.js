import ErrorBoundry from "./ErrorBoundry";
import { render } from "@testing-library/react"
describe("Error Boundry Component tests set", () => {
    test("Component is loading properly", () => {
        render(<ErrorBoundry />);
    });
});