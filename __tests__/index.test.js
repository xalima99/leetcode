// const reverse = require("../code/reverse");
// test("reverse", () => {
//   expect(reverse(123)).toBe(321);
//   expect(reverse("123")).toBe(321);
//   expect(reverse(-123)).toBe(-321);
//   expect(reverse(-123)).not.toBe(321);
// });

const isPalindrome = require("../code/palindrome")

test("isPalindrome", () => {
  expect(isPalindrome(121)).toBe(true)
  expect(isPalindrome(-121)).toBe(false)
  expect(isPalindrome(10)).toBe(false)
})