const forEach = (arr, callback) => {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
};

describe("mocks callback in function", () => {
  //create a function in jest
  const mockCalledback = jest.fn((x) => 42 + x);
  forEach([0, 1], mockCalledback);
  it("checks mock callback calls length", () => {
    expect(mockCalledback.mock.calls.length).toBe(2);
  });
  it("check value of first call", () => {
    expect(mockCalledback.mock.calls[0][0]).toBe(0);
  });
  it("check value of second call", () => {
    expect(mockCalledback.mock.calls[1][0]).toBe(1);
  });
  it("check value returned from first callback execution", () => {
    expect(mockCalledback.mock.results[0].value).toBe(42);
  });
  it("check value returned from 2nd callback execution", () => {
    expect(mockCalledback.mock.results[1].value).toBe(43);
  });
});

describe("mock return value", () => {
  const mockFn = jest.fn();
  mockFn.mockReturnValueOnce(true).mockReturnValueOnce(false).mockReturnValueOnce("Hello");

  it("check mock one value is true", () => {
    const result = mockFn();
    expect(result).toBe(true);
  });

  it("check mock 2 value is false", () => {
    const result = mockFn();
    expect(result).toBe(false);
  });

  it("check mock 3 value is Hello", () => {
    const result = mockFn();
    expect(result).toBe("Hello");
  });
});
