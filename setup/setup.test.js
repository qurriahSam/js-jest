let animals = ["cow", "goat", "lion", "dog"];

// beforeEach() runs b4 each test afterEach() runs after each test

beforeEach(() => {
  animals = ["cow", "goat", "lion", "dog"];
});

describe("animals array", () => {
  it("should add animal to end of array", () => {
    animals.push("alligator");
    expect(animals[animals.length - 1]).toBe("alligator");
  });
  it("should add animal to the beginning of an array", () => {
    animals.unshift("zebra");
    expect(animals[0]).toBe("zebra");
  });
  it("should have a length of 4", () => {
    expect(animals.length).toEqual(4);
  });
});
