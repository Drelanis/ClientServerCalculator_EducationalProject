import ReactDOM from 'react-dom/client';
import App from './App';
import mainClassNames from './view/classNames/mainClassNames';
import Model from './model/Model';
import Controller from './controller/Controller';

const root = document.querySelector(`.${mainClassNames.mainContent}`);

new Controller(Model);
ReactDOM.createRoot(root as HTMLElement).render(<App />);
