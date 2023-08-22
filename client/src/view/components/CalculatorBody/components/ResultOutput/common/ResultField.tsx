import { FC } from 'react';
import { outputClassNames } from '../../../../../classNames/classNamesOfElements';
import Loader, { smallLoader } from '../../../../../common/Loader';
import { toast } from 'react-toastify';

interface IResultFieldProps {
  result: string;
  isLoad: boolean;
}

const ResultField: FC<IResultFieldProps> = ({ result, isLoad }) => {
  const copyResult = async (result: string) => {
    try {
      await navigator.clipboard.writeText(result);
      toast.success('Result copied!');
    } catch (error) {
      toast.error('Oops, something is wrong =(');
    }
  };

  return (
    <span
      className={outputClassNames.resultField}
      onClick={() => copyResult(result)}
    >
      {isLoad && <Loader style={smallLoader} />}
      {result ? result : '0'}
    </span>
  );
};

export default ResultField;
