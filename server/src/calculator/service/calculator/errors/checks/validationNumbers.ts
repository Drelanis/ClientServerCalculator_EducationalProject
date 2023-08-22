import { constantRegexp } from '../../../../config/regexp/regexp';

const validationNumbers = (expression: string): boolean => {
  if (!expression) return true;
  let validExpression = true;
  const regexValidNumber = /^(?!0\d|\.\d)\d*(\.\d+)?$/;
  const numbersOnly = expression.match(/[\d.]+/g) || [];
  if (numbersOnly.length === 0) {
    validExpression = false;
  }
  numbersOnly.forEach((number) => {
    if (!regexValidNumber.test(number)) {
      validExpression = false;
    }
  });
  if (expression.match(constantRegexp.checkingNumbersAfterTheParenthesis))
    validExpression = false;
  return validExpression;
};

export default validationNumbers;
