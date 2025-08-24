import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestingComponent from "./TestingComponent";

test("renders TestingComponent with text", () => {
  render(<TestingComponent text="Hello World" />);
  const element = screen.getByTestId("testing-component");
  expect(element).toHaveTextContent("Hello World");
});