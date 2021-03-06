/* This section uses a functional extension known as Underscore.js - http://documentcloud.github.com/underscore/
     "Underscore is a utility-belt library for JavaScript that provides a lot of the functional programming support
      that you would expect in Prototype.js (or Ruby), but without extending any of the built-in JavaScript objects.
      It's the tie to go along with jQuery's tux."
 */
describe("About Higher Order Functions", function () {

  it("should use filter to return array items that meet a criteria", function () {
    const numbers = [1,2,3];
    const odd = numbers.filter((number) => (number % 2) !== 0);

    expect(odd).toEqual(FILL_ME_IN);
    expect(odd.length).toBe(FILL_ME_IN);
    expect(numbers.length).toBe(FILL_ME_IN);
  });

  it("should use 'map' to transform each element", function () {
    const numbers = [1, 2, 3];
    const numbersPlus1 = numbers.map((number) => number + 1);

    expect(numbersPlus1).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'reduce' to update the same result on each iteration", function () {
    const numbers = [1, 2, 3];
    const reduction = numbers.reduce((memo, x) => memo + x, 0);

    expect(reduction).toBe(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'forEach' for simple iteration", function () {
    const numbers = [1,2,3];
    let msg = "";
    const isEven = function (item) {
      msg += (item % 2) === 0;
    };

    numbers.forEach(isEven);

    expect(msg).toEqual(FILL_ME_IN);
    expect(numbers).toEqual(FILL_ME_IN);
  });

  it("should use 'every' to test whether all items pass condition", function () {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.every(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.every(isEven)).toBe(FILL_ME_IN);
  });

  it("should use 'some' to test if any items passes condition" , function () {
    const onlyEven = [2,4,6];
    const mixedBag = [2,4,5,6];

    const isEven = function(x) { return x % 2 === 0 };

    expect(onlyEven.some(isEven)).toBe(FILL_ME_IN);
    expect(mixedBag.some(isEven)).toBe(FILL_ME_IN);
  });

  it("should use flatten to make nested arrays easy to work with", function() {
    expect([].concat([1, 2], [3, 4])).toEqual(FILL_ME_IN);
  });

  it("should use chain() ... .value() to use multiple higher order functions", function() {
    const result = [].concat([0, 1], [2])
      .map(function(x) {
        return x + 1
      })
      .reduce(function(sum, x) {
        return sum + x
      });

    expect(result).toEqual(FILL_ME_IN);
  });

});

