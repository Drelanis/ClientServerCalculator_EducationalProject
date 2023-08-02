import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './view/styles/index.scss';
import AppRouter from './view/components/AppRouter.tsx';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
