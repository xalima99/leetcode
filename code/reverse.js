const reverse = (num) => {
  const reversedNumber = parseInt(num.toString().split('').reverse().join('')) * Math.sign(num)
  return reversedNumber
}

module.exports = reverse