function getFactors(number) {
  if (number === 1) return [1];

  const factors = [];
  let divisor = 2;

  while (number > 1) {
    for (; number % divisor === 0; number /= divisor) {
      factors.push(divisor);
    }
    divisor++;
  }

  return factors;
}

module.exports = {
  getFactors,
};
