const Calculate = {
  factorial(n) {
    let fac = 1;
    for (let i = n; i > 0; i--) {
      fac *= i;
    }
    return fac;
  },
};

module.exports = Calculate;
