import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Greeting from "./Greeting";

describe("Greeting component", () => {
  test("renders text correctly", () => {
    render(<Greeting />);

    const helloElement = screen.getByText("Hello my fen");
    const extraElement = screen.getByText("It's nice to see you");

    expect(helloElement).toBeInTheDocument();
    expect(extraElement).toBeInTheDocument();
  });

  test("renders clicked text conditional correctly", () => {
    render(<Greeting />);

    const clickedText = screen.getByText("Not Clicked");

    expect(clickedText).toBeInTheDocument();
  });

  test("renders not clicked text conditional correctly", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");

    userEvent.click(buttonElement);
    const clickedText = screen.getByText("Clicked");

    expect(clickedText).toBeInTheDocument();
  });
});
