function isNumber(numberArabic, comparaisonNumber, romanNumber) {}

function checkNumber(result) {
  if (result.arabic >= 1000) {
    result.romanString += "M";
    result.arabic -= 1000;
  } else if (result.arabic >= 500) {
    result.romanString += "D";
    result.arabic -= 500;
  } else if (result.arabic >= 100) {
    result.romanString += "C";
    result.arabic -= 100;
  } else if (result.arabic >= 50) {
    result.romanString += "L";
    result.arabic -= 50;
  } else if (result.arabic >= 10) {
    result.romanString += "X";
    result.arabic -= 10;
  } else if (result.arabic >= 5) {
    result.romanString += "V";
    result.arabic -= 5;
  } else if (result.arabic >= 1) {
    result.romanString += "I";
    result.arabic -= 1;
  }
}

function display_exepcetion_nine(arabicNumber) {
  let tenth = arabicNumber % 10;
  return arabicNumber - (9 * tenth - 1);
}
function arabicToRoman(arabicNumber) {
  let result = {
    arabic: arabicNumber,
    romanString: ""
  };
  while (result.arabic !== 0) {
    checkNumber(result);
  }
  return result.romanString;
}

export const romanConverter = {
  toRoman(arabic) {
    const roman_numbers = ["I", "V", "X", "L", "C", "D", "M"];
    return arabicToRoman(arabic);
  },
  fromRoman(roman) {
    return /*your code here*/ undefined;
  }
};
