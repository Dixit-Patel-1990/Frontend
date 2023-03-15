import Navigation from "./Navigation";
import { render } from "@testing-library/react"
describe("Navigation Component tests set", () => {
    test("Component is loading properly", () => {
        render(<Navigation />);
    });
});