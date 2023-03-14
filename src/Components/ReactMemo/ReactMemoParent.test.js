import { render, screen } from "@testing-library/react";
import ReactMemoParent from "./ReactMemoParent";
// import ReactMemoChild from "./ReactMemoChild";


const mockReactMemoChildComponent = jest.fn();
jest.mock("./ReactMemoChild", () => (props) => {
    mockReactMemoChildComponent(props);
    return <mock-ReactMemoChildComponent/>
});

describe("Test cases for React Memo Parent Component", () => {

    test("Should load parent component with initial state after 1 second", () => {
        jest.useFakeTimers();
        const parent = render(<ReactMemoParent/>);
        jest.advanceTimersByTime(1000);
        expect(parent).toBeDefined();
    });


    test("Should call child component with props", async () => {
        await render(<ReactMemoParent/>);
        expect(mockReactMemoChildComponent).toBeCalledWith(
            expect.objectContaining({
                name:"Dixit"
            })
        )
    });
});