const fetchData = require("./async");

describe("asynchronous tests", () => {
  it("should return correct todo for get request", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});
