//
// This is only a SKELETON file for the 'Armstrong Numbers' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isArmstrongNumber = (number) => {

  if (number === null || number === undefined || number === "") {
    return false;
  }

  var digits = number.toString().split('').map(Number)

  var numberOfDigits = digits.length;
  var ris = 0;
  for (var i = 0; i < numberOfDigits; i++) {
    ris = ris + Math.pow(digits[i], numberOfDigits);
  }
  if (ris == number)
    return true;

  return false;
};
