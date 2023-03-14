import { render, screen } from "@testing-library/react";
import PureComponentParent from "./PureComponentParent";


const mockReactPureComponentChild= jest.fn();
jest.mock("./PureComponentChild", 
() => 
    (props) => {
    mockReactPureComponentChild(props);
    return <mock-ReactPureComponentChild/>
});

describe("Test cases for React Pure Parent Component", () => {

    test("Should load parent component with initial state after 1 second", () => {
        jest.useFakeTimers();
        const parent = render(<PureComponentParent/>);
        jest.advanceTimersByTime(1000);
        expect(parent).toBeDefined();
    });


    test("Should call child component with props", async () => {
        await render(<PureComponentParent/>);
        expect(mockReactPureComponentChild).toBeCalledWith(
            expect.objectContaining({
                name:"Dixit"
            })
        )
    });
});