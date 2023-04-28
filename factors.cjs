function getFactors(number) {
  const factors = [];
  if (number === 1) return [1];

  while (number % 2 === 0) {
    factors.push(2);
    number /= 2;
  }

  while (number % 3 === 0) {
    factors.push(3);
    number /= 3;
  }

  if (number > 1) {
    factors.push(number);
  }

  return factors;
}

module.exports = {
  getFactors,
};
