import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TestingComponent from "./TestingComponent";

test("renders TestingComponent with text", () => {
  render(<TestingComponent text="Hello Testing" />);
  const element = screen.getByText("Hello Testing");
  expect(element).toBeInTheDocument();
});