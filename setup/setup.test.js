let animals = ["cow", "goat", "lion", "dog"];

// beforeAll runs once before all tests run also has afterAll

// beforeEach() runs b4 each test afterEach() runs after each test

describe("animals array", () => {
  //scoped so that it does'nt run b4 all tests in file
  beforeEach(() => {
    animals = ["cow", "goat", "lion", "dog"];
  });

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
