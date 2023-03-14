import { render, screen } from "@testing-library/react";
import ReactMemoChild from "./ReactMemoChild";

describe("Test cases for React Memo Child Component", () => {
    render(<ReactMemoChild name="Dixit"/>)
    test("Should display name", () => {
        let element = screen.getAllByText("Dixit");
        // screen.debug();
        expect(element).toBeTruthy();
    });
});