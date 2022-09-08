import { render, screen } from "@testing-library/react";
import Home from "@/pages/index";

const mockPostData = [
  {
    id: "test-post",
    date: "2020-01-01",
    title: "Test Post for Testing"
  }
];

describe("Home", () => {
  it("renders a heading", () => {
    render(<Home allPostsData={mockPostData} />);

    const heading = screen.getByRole("heading", {
      name: /some guy/i
    });

    expect(heading).toBeInTheDocument();
  });
});
