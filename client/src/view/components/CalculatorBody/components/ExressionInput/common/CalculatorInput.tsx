import { FC } from 'react';
import { inputClassNames } from 'view/classNames/classNamesOfElements';

interface ICalculatorInputProps {
  inputRef: React.MutableRefObject<HTMLTextAreaElement | null>;
}

const CalculatorInput: FC<ICalculatorInputProps> = ({ inputRef }) => {
  return (
    <textarea
      ref={inputRef}
      className={inputClassNames.inputField}
      placeholder="Expression input"
    ></textarea>
  );
};

export default CalculatorInput;
