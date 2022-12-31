const throwError = require("./throwError");

describe("exceptions", () => {
  it("compiling android error", () => {
    expect(() => throwError()).toThrow("using wrong JDK");
  });
});
