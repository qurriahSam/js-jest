const axios = require("axios");
const fetchData = require("./async");

describe("asynchronous tests", () => {
  it("should return correct todo for get request", async () => {
    const todo = await fetchData(1);
    expect(todo.id).toBe(1);
  });
});

describe("mock async test", () => {
  it("should return correct todo for mock get request", async () => {
    jest.spyOn(axios, "get").mockReturnValueOnce({
      data: {
        id: 1,
        todo: "This is a mock todo",
      },
    });
    const results = await fetchData(1);
    expect(results.todo).toBe("This is a mock todo");
  });
});
