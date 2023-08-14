import { FC } from 'react';
import { IHistoryItem } from '../../../../../../../interfaces/calculatorInterfaces';
import HistoryItem from './components/HistoryItem';
import { title } from '../../../../../../classNames/classNamesOfElements';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

interface IHistoryListProps {
  elements: IHistoryItem[];
  input: (expression: string, result: string) => void;
  remove: (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    historyItem: IHistoryItem
  ) => void;
}

const HistoryList: FC<IHistoryListProps> = ({ elements, input, remove }) => {
  if (!elements.length) {
    return <h3 className={title.root}>History is empty</h3>;
  }

  return (
    <>
      <TransitionGroup>
        {elements.map((element) => (
          <CSSTransition
            key={element._id}
            timeout={500}
            classNames="history-item"
          >
            <HistoryItem
              historyElement={element}
              action={input}
              remove={remove}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default HistoryList;
