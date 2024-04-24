var assert = require("assert");
var Rooster = require("../index.js");

describe("Rooster", () => {
  before(() => {
    var hour = 1;
  });
  afterEach(() => {
    var hour = 1;
  });

  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "cock-a-doodle-doo!";
      //execise
      const compare = Rooster.announceDawn();
      //verify
      assert.equal(expected, compare);
    });

    it("returns its argument as a string", () => {
      const expected = "23";
      hour = 23;
      const result = Rooster.timeAtDawn(hour);
      assert.strictEqual(expected, result);
    });

    it("throws an error if passed a number less than 0", () => {
      hour = -1;

      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
    it("throws an error if passed a number greater than 23", () => {
      hour =+ 555;
      assert.throws(() => {
        Rooster.timeAtDawn(hour);
      }, RangeError);
    });
  });
});
