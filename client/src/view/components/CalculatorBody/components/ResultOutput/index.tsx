import { FC } from 'react';
import { outputClassNames } from 'view/classNames/classNamesOfElements';
import EqualIcon from './common/EqualIcon';
import ResultField from './common/ResultField';

interface IResultOutputProps {
  result: string;
  isLoad: boolean;
}

const ResultOutput: FC<IResultOutputProps> = ({ result, isLoad }) => {
  return (
    <div className={outputClassNames.root}>
      <EqualIcon />
      <ResultField result={result} isLoad={isLoad} />
    </div>
  );
};

export default ResultOutput;
