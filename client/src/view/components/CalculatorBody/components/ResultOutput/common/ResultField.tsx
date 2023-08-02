import { FC } from 'react';
import { outputClassNames } from '../../../../../classNames/classNamesOfElements';
import Loader, { smallLoader } from '../../../../../common/Loader';

interface IResultFieldProps {
  result: string;
  isLoad: boolean;
}

const ResultField: FC<IResultFieldProps> = ({ result, isLoad }) => {
  return (
    <span className={outputClassNames.resultField}>
      {isLoad && <Loader style={smallLoader} />}
      {result ? result : '0'}
    </span>
  );
};

export default ResultField;
