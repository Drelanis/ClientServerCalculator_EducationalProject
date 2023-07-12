import './view/styles/index.scss';
import CalculatorView from './view/calculatorView/CalculatorView';
import Model from './model/Model';
import Controller from './controller/Controller';

const model = new Model();
new CalculatorView(model);
new Controller(model);

console.log();
