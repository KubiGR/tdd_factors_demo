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

  it("should return [2,2] when getting factors of 4", () => {
    const factors = getFactors(4);
    expect(factors).toEqual([2, 2]);
  });

  it("should return [5] when getting factors of 5", () => {
    const factors = getFactors(5);
    expect(factors).toEqual([5]);
  });

  it("should return [2, 3] when getting factors of 6", () => {
    const factors = getFactors(6);
    expect(factors).toEqual([2, 3]);
  });

  it("should return [7] when getting factors of 7", () => {
    const factors = getFactors(7);
    expect(factors).toEqual([7]);
  });

  it("should return [2, 2, 2] when getting factors of 8", () => {
    const factors = getFactors(8);
    expect(factors).toEqual([2, 2, 2]);
  });
});
