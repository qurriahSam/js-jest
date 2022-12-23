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

describe("greaterThan and lessThanCheck for 2 + 2", () => {
  const result = 2 + 2;
  it("is equal to four", () => {
    expect(result).toEqual(4);
  });
  it("is greater than 3", () => {
    expect(result).toBeGreaterThan(3);
  });
  it("is greater than or equal to 4", () => {
    expect(result).toBeGreaterThanOrEqual(4);
  });
  it("is less than 7", () => {
    expect(result).toBeLessThan(7);
  });
  it("is less than or equal to 4", () => {
    expect(result).toBeLessThanOrEqual(4);
  });
});
