const Calculate = {
  factorial(n) {
    let fac = 1;
    //standard check
    if (n > 0) {
      for (let i = n; i > 0; i--) {
        fac *= i;
      }
    }
    //edge check is done aumtaically, if n = 0 then function returns 1
    return fac;
  },
};

module.exports = Calculate;
