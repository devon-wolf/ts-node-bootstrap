import { sampleFunction } from "./sample";

describe("sample test", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns a greeting", () => {
    const expected = "Hello, TypeScript!";
    const actual = sampleFunction();
    expect(actual).toEqual(expected);
  });

  it("logs a greeting to the console", () => {
    const consoleSpy = jest.spyOn(console, "log");
    sampleFunction();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
    expect(consoleSpy).toHaveBeenCalledWith("Hello, TypeScript!");
  });
});
