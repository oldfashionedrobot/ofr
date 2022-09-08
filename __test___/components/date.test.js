import { render } from "@testing-library/react";
import Date from "../../components/date";

describe("Date", () => {
  beforeAll(() => jest.mock("date-fns"));

  it("renders a formatted datetime element", () => {
    const inputStr = "2020-01-01";
    const outputStr = "January 1, 2020";

    const { container } = render(<Date dateString={inputStr} />);
    const rendered = container.querySelector("time");

    expect(rendered).toBeInTheDocument();
    expect(rendered.dateTime).toBe(inputStr);
    expect(rendered.innerHTML).toBe(outputStr);
  });
});
