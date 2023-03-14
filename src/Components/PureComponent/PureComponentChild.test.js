import { render, screen } from "@testing-library/react";
import PureComponentChild from "./PureComponentChild";

describe("Test cases for React Pure Child Component", () => {
    render(<PureComponentChild name="Dixit"/>)
    test("Should display name", () => {
        let element = screen.getAllByText("Dixit");
        // screen.debug();
        expect(element).toBeTruthy();
    });
});