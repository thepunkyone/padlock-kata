const PADLOCK_DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const MULTIPLICATION_RESULT_OF_FIRST_TWO_DIGITS = 24;
const SUM_OF_ALL_DIGITS = 22;

const getFirstTwoDigitCandidates = (padlockDigits) => {
  const firstTwoDigitCandidates = [];

  padlockDigits.forEach((firstDigit) => {
    padlockDigits.forEach((secondDigit) => {
      if (
        firstDigit * secondDigit ===
        MULTIPLICATION_RESULT_OF_FIRST_TWO_DIGITS
      ) {
        firstTwoDigitCandidates.push([firstDigit, secondDigit]);
      }
    });
  });

  return firstTwoDigitCandidates;
};

module.exports = {
  getFirstTwoDigitCandidates,
};
