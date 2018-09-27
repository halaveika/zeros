module.exports = function getZerosCount(number) {
    let counter = 0;
    for (let i = 5; number/i >= 1; i *= 5)
      counter += Math.floor(number/i);
    return module.exports=counter;
  }
