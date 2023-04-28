function getFactors(number) {
  const factors = [];
  if (number % 2 === 0) {
    factors.push(2);
    number /= 2;

    if (number > 1) {
      factors.push(number);
    }
  } else {
    factors.push(number);
  }

  return factors;
}

module.exports = {
  getFactors,
};
