import { FC } from 'react';
import CalculatorBody from '../components/CalculatorBody';
import ErrorToast from '../common/ErrorToast';
import 'react-toastify/dist/ReactToastify.css';

const Calculator: FC = () => {
  return (
    <>
      <CalculatorBody />
      <ErrorToast />
    </>
  );
};

export default Calculator;
