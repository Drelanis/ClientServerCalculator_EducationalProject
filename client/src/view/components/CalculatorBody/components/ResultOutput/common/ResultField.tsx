import { FC } from 'react';
import { outputClassNames } from '../../../../../classNames/classNamesOfElements';
import Loader from '../../../common/Loader';

interface IResultFieldProps {
  result: string;
  isLoad: boolean;
}

const ResultField: FC<IResultFieldProps> = ({ result, isLoad }) => {
  return (
    <span className={outputClassNames.resultField}>
      {isLoad && (
        <Loader style={{ height: '20px', width: '20px', borderWidth: '5px' }} />
      )}
      {result ? result : '0'}
    </span>
  );
};

export default ResultField;
