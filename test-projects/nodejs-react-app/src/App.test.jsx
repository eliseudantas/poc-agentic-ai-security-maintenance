import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("renders the app title", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Node.js React App");
  });

  it("renders node version section", () => {
    render(<App />);
    expect(screen.getByText(/node version/i)).toBeInTheDocument();
    expect(screen.getByText("18.x")).toBeInTheDocument();
  });

  it("renders package versions section", () => {
    render(<App />);
    expect(screen.getByText(/package versions/i)).toBeInTheDocument();
  });

  it("displays dependencies as list items", () => {
    render(<App />);
    const listItems = screen.getAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(0);
  });

  it("displays react dependency", () => {
    render(<App />);
    expect(screen.getByText(/^react: \^/)).toBeInTheDocument();
  });
});
