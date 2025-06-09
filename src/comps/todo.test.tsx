import { render, screen, fireEvent } from "@testing-library/react";
import TodoInput from "./todo";

describe("TodoInput Component Test", () => {
  it("should be allowed to input text", () => {
    const mockFn = jest.fn();
    render(<TodoInput onAdd={mockFn} />);
    const input = screen.getByPlaceholderText("请输入待办事项");
    fireEvent.change(input, {
      target: {
        value: "buy milk",
      },
    });
    expect((input as HTMLInputElement).value).toBe("TODO:buy milk");
  });

  it("after lick add,should call onAdd and pass the input text", () => {
    const mockFn = jest.fn();
    render(<TodoInput onAdd={mockFn} />);
    const input = screen.getByPlaceholderText("请输入待办事项");
    const button = screen.getByText("添加");
    fireEvent.change(input, {
      target: {
        value: "buy milk",
      },
    });

    fireEvent.click(button);
    expect(mockFn).toHaveBeenCalledTimes(1);
    expect(mockFn).toHaveBeenCalledWith("TODO:buy milk");
  });

  it("after click add button, should clear the input", () => {
    const mockFn = jest.fn();
    render(<TodoInput onAdd={mockFn} />);
    const input = screen.getByPlaceholderText("请输入待办事项");
    const button = screen.getByText("添加");
    fireEvent.change(input, {
      target: {
        value: "buy milk",
      },
    });

    fireEvent.click(button);
    expect((input as HTMLInputElement).value).toBe("");
  });
});
