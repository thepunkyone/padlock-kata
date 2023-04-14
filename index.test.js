const {
  getFirstTwoDigitCandidates,
  getFourthDigitCandidates,
} = require("./index");

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

  describe("getFourthDigitCandidates", () => {
    it("returns the two digit combinations passed in with a fourth digit appended to them, the value of which is half of the second digit", () => {
      const stubbedTwoDigitCandidates = [
        [4, 6],
        [3, 8],
      ];

      const result = getFourthDigitCandidates(stubbedTwoDigitCandidates);

      expect(result).toEqual([
        [4, 6, undefined, 3],
        [3, 8, undefined, 4],
      ]);
    });

    it("does not include a combination in the list of combinations returned when the value of the fourth digit calculated is not an integer", () => {
      const stubbedTwoDigitCandidates = [
        [4, 6],
        [8, 3],
      ];

      const result = getFourthDigitCandidates(stubbedTwoDigitCandidates);

      expect(result).toEqual([[4, 6, undefined, 3]]);
    });
  });
});
