import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders node version and package versions sections", () => {
    render(<App />);
    expect(screen.getByText(/node version/i)).toBeInTheDocument();
    expect(screen.getByText(/package versions/i)).toBeInTheDocument();
  });
});
