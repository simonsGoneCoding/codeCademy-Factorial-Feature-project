const assert = require("assert");
const Calculate = require("../index");

describe("Calculate", () => {
  describe(".factorifal", () => {
    it("returns output of 5!", () => {
      //setup
      const input = 5;
      const result = Calculate.factorial(input);
      //exercise
      const expected = 120;
      //veify
      assert.strictEqual(result, expected);
    });

    it("returns output of 3!", () => {
      //setup
      const input = 3;
      const result = Calculate.factorial(input);
      //exercise
      const expected = 6;
      //veify
      assert.strictEqual(result, expected);
    });

    it("returns output of 0!", () => {
      //setup
      const input = 0;
      const result = Calculate.factorial(input);
      //exercise
      const expected = 1;
      //veify
      assert.strictEqual(result, expected);
    });
  });
});
