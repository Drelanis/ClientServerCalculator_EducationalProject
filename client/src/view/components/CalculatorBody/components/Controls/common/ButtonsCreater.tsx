import { FC } from 'react';
import { IOperations } from 'interfaces/calculatorInterfaces';

interface IActionButtonProps {
  buttons: IOperations;
  className: string;
  action?: (buttonValue: string) => void;
}

const ButtonsCreater: FC<IActionButtonProps> = ({
  buttons,
  className,
  action = () => {},
}) => {
  return (
    <>
      {buttons &&
        Object.entries(buttons).map((button) => (
          <button
            id={button[0]}
            key={button[0]}
            className={`${button[0]}-button ${className}`}
            onClick={() => action(button[1].content)}
          >
            {button[1].content}
          </button>
        ))}
    </>
  );
};

export default ButtonsCreater;
