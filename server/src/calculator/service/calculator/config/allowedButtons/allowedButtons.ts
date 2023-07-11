import { operations } from '../mainOperations/mainOperations.js';
import numbers from '../numbers/numbers.js';

const dataSetting = (): string[] => {
  const allowedButtons: Partial<string[]> = [];
  Object.values(operations).forEach((element) => {
    allowedButtons.push(element.content);
  });
  Object.values(numbers).forEach((number) => {
    allowedButtons.push(number.content);
  });

  return allowedButtons;
};

export default dataSetting;
