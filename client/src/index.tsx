import ReactDOM from 'react-dom/client';
import App from './App';
import mainClassNames from './view/classNames/mainClassNames';
import Model from './model/Model';
import Controller from './controller/Controller';

const root = document.querySelector(`.${mainClassNames.mainContent}`);

const model = new Model();
new Controller(model);
ReactDOM.createRoot(root as HTMLElement).render(<App model={model} />);
