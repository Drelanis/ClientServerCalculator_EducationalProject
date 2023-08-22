import { operations } from '../mainOperations/mainOperations';
import numbers from '../numbers/numbers';

const dataSetting = (): (string | undefined)[] => {
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
