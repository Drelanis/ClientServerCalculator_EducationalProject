import { FC } from 'react';
import ExtraOperations from './components/ExtraOperations';
import MainOperations from './components/MainOperations';

interface IControlButtonsProps {
  isExtraOperation: boolean;
}

const ControlButtons: FC<IControlButtonsProps> = ({ isExtraOperation }) => {
  return isExtraOperation ? <ExtraOperations /> : <MainOperations />;
};

export default ControlButtons;
