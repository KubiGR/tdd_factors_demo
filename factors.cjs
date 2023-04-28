function getFactors(number) {
  if (number === 1) return [1];

  const factors = [];

  for (let divisor = 2; number > 1; divisor++) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
  }

  return factors;
}

module.exports = {
  getFactors,
};
