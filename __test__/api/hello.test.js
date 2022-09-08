import hello from "@/pages/api/hello";

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  return res;
};

describe("api/hello", () => {
  let resp;

  beforeAll(() => {
    resp = mockResponse();
    hello({}, resp);
  });

  it("responds with status: 200", () => {
    expect(resp.status).toHaveBeenCalledWith(200);
  });

  it("renders text: 'hello' ", () => {
    expect(resp.json).toHaveBeenCalledWith({ text: "Hello" });
  });
});
