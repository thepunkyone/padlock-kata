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

const getFourthDigitCandidates = (firstTwoDigitCandidates) => {
  const fourthDigitCandidates = [];

  firstTwoDigitCandidates.forEach((candidate) => {
    const fourthDigit = candidate[1] / 2;

    if (Math.floor(fourthDigit) === fourthDigit) {
      const candidateCopy = [...candidate];
      candidateCopy[3] = fourthDigit;

      fourthDigitCandidates.push(candidateCopy);
    }
  });

  return fourthDigitCandidates;
};

const getThirdAndFifthDigitCandidates = (
  padlockDigits,
  firstSecondAndFourthDigitCandidates
) => {
  const thirdAndFifthDigitCandidates = [];

  firstSecondAndFourthDigitCandidates.forEach((candidate) => {
    padlockDigits.forEach((thirdDigit) => {
      padlockDigits.forEach((fifthDigit) => {
        const candidateCopy = [...candidate];

        const firstDigit = candidateCopy[0];
        const fourthDigit = candidateCopy[3];

        if (firstDigit + thirdDigit === fourthDigit + fifthDigit) {
          candidateCopy[2] = thirdDigit;
          candidateCopy[4] = fifthDigit;

          thirdAndFifthDigitCandidates.push(candidateCopy);
        }
      });
    });
  });

  return thirdAndFifthDigitCandidates;
};

const combinationsThatAddUpToTheTotalSumOfDigitsFrom = (
  candidatesWithThirdAndFifthDigits
) => {
  return candidatesWithThirdAndFifthDigits.filter((candidate) => {
    const candidateSum = candidate.reduce((acc, currentVal) => {
      return acc + currentVal;
    });

    return candidateSum === SUM_OF_ALL_DIGITS;
  });
};

const combinationsWithNonUniqueDigitsFrom = (
  padlockDigits,
  candidatesThatAddUpToTheTotalSumOfDigits
) => {
  return candidatesThatAddUpToTheTotalSumOfDigits.filter((candidate) => {
    return candidate.length - Array.from(new Set(candidate)).length === 1;
  });
};

const getPadlockCombination = () => {
  const firstTwoDigitCandidates = getFirstTwoDigitCandidates(PADLOCK_DIGITS);

  const fourthDigitCandidates = getFourthDigitCandidates(
    firstTwoDigitCandidates
  );

  const thirdAndFifthDigitCandidates = getThirdAndFifthDigitCandidates(
    PADLOCK_DIGITS,
    fourthDigitCandidates
  );

  const combinationsThatAddUpToTheTotalSumOfDigits =
    combinationsThatAddUpToTheTotalSumOfDigitsFrom(
      thirdAndFifthDigitCandidates
    );

  const combinationResult = combinationsWithNonUniqueDigitsFrom(
    PADLOCK_DIGITS,
    combinationsThatAddUpToTheTotalSumOfDigits
  );

  const combination = combinationResult
    .map((combination) => combination.join(""))
    .join("");

  return `Your padlock digit combination is ${combination}.`;
};

module.exports = {
  getFirstTwoDigitCandidates,
  getFourthDigitCandidates,
  getThirdAndFifthDigitCandidates,
  combinationsThatAddUpToTheTotalSumOfDigitsFrom,
  combinationsWithNonUniqueDigitsFrom,
  getPadlockCombination,
};
