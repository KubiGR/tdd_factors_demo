const { getFactors } = require("./factors.cjs");

describe("factors", () => {
  it("should return 1 when getting factors of 1", () => {
    const factors = getFactors(1);
    expect(factors).toEqual([1]);
  });
});
