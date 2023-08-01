import { FC } from 'react';
import Numbers from './components/Numbers';
import TopOperation from './components/TopOperations';
import RightOperation from './components/RightOperations';

const MainOperations: FC = () => {
  return (
    <>
      <Numbers />
      <TopOperation />
      <RightOperation />
    </>
  );
};

export default MainOperations;
