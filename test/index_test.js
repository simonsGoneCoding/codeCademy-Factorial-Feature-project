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

      //verify
      assert.strictEqual(result, expected);
    });
  });
});
