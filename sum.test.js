const sum = require("./sum");

describe("description one", () => {
  it("should add 1 + 2 to equal 3", () => {
    const result = sum(1, 2);
    expect(result).toBe(3);
  });
  it("to match objects/arrays use isEqual", () => {
    const obj = { name: "sam" };
    expect(obj).toEqual({ name: "sam" });
  });
});

describe("check truthy or falsey", () => {
  it("null check", () => {
    const n = null;
    expect(n).toBeNull();
  });
  it("falsy check", () => {
    const n = null;
    expect(n).toBeFalsy();
  });
  it("true check", () => {
    const n = true;
    expect(n).toBeTruthy();
  });
});
