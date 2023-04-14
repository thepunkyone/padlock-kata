const {
  getFirstTwoDigitCandidates,
  getFourthDigitCandidates,
  getThirdAndFifthDigitCandidates,
  combinationsThatAddUpToTheTotalSumOfDigitsFrom,
  combinationsWithNonUniqueDigitsFrom,
  getPadlockCombinations,
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

  describe("getThirdAndFifthDigitCandidates", () => {
    it("returns all variations of padlock combinations passed in with third and fifth digits added, where the sum of the final two digits equals the sum of the first and third digits", () => {
      const stubbedPadlockDigitList = [3, 4, 6, 8];

      const stubbedFirstSecondAndFourthDigitCandidates = [
        [4, 6, undefined, 3],
        [3, 8, undefined, 4],
      ];

      const result = getThirdAndFifthDigitCandidates(
        stubbedPadlockDigitList,
        stubbedFirstSecondAndFourthDigitCandidates
      );

      expect(result).toEqual([
        [4, 6, 3, 3, 4],
        [3, 8, 4, 4, 3],
      ]);
    });
  });

  describe("combinationsThatAddUpToTheTotalSumOfDigitsFrom", () => {
    it("filters padlock combinations passed in, only returning combinations where the total sum of all digits is 22", () => {
      const combinationWhichDoesNotAddUpTo22 = [1, 2, 3, 4, 5];
      const combinationWhichAddsUpTo22 = [4, 4, 6, 2, 6];

      const stubbedCombinations = [
        combinationWhichDoesNotAddUpTo22,
        combinationWhichAddsUpTo22,
      ];

      const result =
        combinationsThatAddUpToTheTotalSumOfDigitsFrom(stubbedCombinations);

      expect(result).toEqual([combinationWhichAddsUpTo22]);
    });
  });

  describe("combinationsWithNonUniqueDigitsFrom", () => {
    it("filters padlock combinations passed in, only returning combinations where not all digits are unique", () => {
      const combinationWithUniqueDigits = [1, 2, 3, 4, 5];
      const combinationWithNonUniqueDigits = [4, 4, 3, 2, 6];

      const stubbedCombinations = [
        combinationWithUniqueDigits,
        combinationWithNonUniqueDigits,
      ];

      const result = combinationsWithNonUniqueDigitsFrom(
        fullPadlockDigitList,
        stubbedCombinations
      );

      expect(result).toEqual([combinationWithNonUniqueDigits]);
    });

    it("removes duplicated combinations from the return value when they are included due to multiple non-unique digits", () => {
      const combinationWithMultipleNonUniqueDigits = [4, 4, 6, 2, 6];

      const stubbedCombinations = [combinationWithMultipleNonUniqueDigits];

      const result = combinationsWithNonUniqueDigitsFrom(
        fullPadlockDigitList,
        stubbedCombinations
      );

      expect(result).toEqual([combinationWithMultipleNonUniqueDigits]);
    });
  });

  describe("getPadlockCombinations", () => {
    it("returns a message with possible padlock combinations where the multiplication product of the first two numbers is 24, the fourth digit is half of the second digit, the sum of the final two digits equals the sum of the first and third digits, the sum total of all numbers is 22, and not all numbers are unique", () => {
      const result = getPadlockCombinations();

      expect(result).toBe("Your padlock digit combination is 38443 or 46435.");
    });
  });
});
