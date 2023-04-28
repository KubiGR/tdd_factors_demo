function getFactors(number) {
  if (number === 1) return [1];

  const factors = [];
  let divisor = 2;

  while (number > 1) {
    while (number % divisor === 0) {
      factors.push(divisor);
      number /= divisor;
    }
    divisor++;
  }

  return factors;
}

module.exports = {
  getFactors,
};
