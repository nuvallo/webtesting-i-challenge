const enhancer = require("./enhancer.js");
// test away!

describe("enhancers module", () => {
  describe("success function", () => {
    it("increases the items enhancement by 1", () => {
      const expectedOutput = {
        name: "sword",
        durability: 100,
        enhancement: 11,
      };
      const actualOutput = enhancer.succeed({
        name: "sword",
        durability: 100,
        enhancement: 10,
      });
      expect(actualOutput).toMatchObject(expectedOutput);
    });
    it("does not increase the enhancement beyond 20", () => {
      const expectedOutput = {
        name: "sword",
        durability: 100,
        enhancement: 20,
      };
      const actualOutput = enhancer.succeed({
        name: "sword",
        durability: 100,
        enhancement: 20,
      });
      expect(actualOutput).toMatchObject(expectedOutput);
    });
    it("does not change the durability of the item", () => {
      const expectedDurability = {
        name: "sword",
        durability: 100,
        enhancement: 20,
      }.durability;
      const actualDurability = enhancer.succeed({
        name: "sword",
        durability: 100,
        enhancement: 20,
      });
      expect(actualDurability.durability).toBe(expectedDurability);
    });
  });
});
