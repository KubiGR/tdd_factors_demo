const { getFactors } = require("./factors.cjs");

describe("factors", () => {
  it("should return [1] when getting factors of 1", () => {
    const factors = getFactors(1);
    expect(factors).toEqual([1]);
  });

  it("should return [2] when getting factors of 2", () => {
    const factors = getFactors(2);
    expect(factors).toEqual([2]);
  });

  it("should return [3] when getting factors of 3", () => {
    const factors = getFactors(3);
    expect(factors).toEqual([3]);
  });
});
