import { FC, RefObject } from 'react';
import CalculatorInput from './common/CalculatorInput';
import { inputClassNames } from '../../../../classNames/classNamesOfElements';

interface IExpressionInputProps {
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
}

const ExpressionInput: FC<IExpressionInputProps> = ({ inputRef }) => {
  return (
    <div className={inputClassNames.root}>
      <CalculatorInput inputRef={inputRef} />
    </div>
  );
};

export default ExpressionInput;
