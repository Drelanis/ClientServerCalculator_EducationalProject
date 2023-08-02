import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter';
import './view/styles/index.scss';

const App: FC = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
