const { getFirstTwoDigitCandidates } = require("./index");

describe("Padlock Kata", () => {
  const fullPadlockDigitList = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  describe("getFirstTwoDigitCandidates", () => {
    it("returns all the possible combinations of two digits from the array of digits passed in, which produce 24 when multiplied", () => {
      const result = getFirstTwoDigitCandidates(fullPadlockDigitList);

      expect(result).toEqual([
        [3, 8],
        [4, 6],
        [6, 4],
        [8, 3],
      ]);
    });
  });
});
