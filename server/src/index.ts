import express, { Express } from 'express';
import cors from 'cors';

import routerOfCalculate from './calculator/routes/calculate.js';
import routerOfConfig from './calculator/routes/config.js';
import calculate from './calculator/service/calculator/calculate/calculate.js';

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use(routerOfCalculate);
app.use(routerOfConfig);

const PORT: number = 4000;

app.listen(PORT);

const tests = [
  { number: 1, input: '2-(sin(π/2)*(-6))', expected: 8 },
  { number: 2, input: '√(9)+3', expected: 6 },
  { number: 3, input: '√(9+7)', expected: 4 },
  { number: 4, input: '2 + 3', expected: 5 },
  { number: 5, input: '!(3+1)', expected: 24 },
  { number: 6, input: '2+!(4)', expected: 26 },
  { number: 7, input: '!(4)', expected: 24 },
  { number: 8, input: '4 - 2', expected: 2 },
  { number: 9, input: '!(3+sin(π/2))', expected: 24 },
  { number: 10, input: '3 * 5', expected: 15 },
  { number: 11, input: '-5 + 8', expected: 3 },
  { number: 12, input: '-7 - 3', expected: -10 },
  { number: 13, input: '-2 * 6', expected: -12 },
  { number: 14, input: '(3 + 2) * 4', expected: 20 },
  { number: 15, input: '23 % 5', expected: 3 },
  { number: 16, input: '6 / (2 + 4)', expected: 1 },
  { number: 17, input: '(8 - 2) * (4 + 1)', expected: 30 },
  { number: 18, input: '-2 * (5 - 3)', expected: -4 },
  { number: 19, input: '-(4 + 3) * (-2)', expected: 14 },
  { number: 20, input: 'cos(0)', expected: 1 },
  { number: 21, input: 'sin(0)', expected: 0 },
  { number: 22, input: 'cos(π)', expected: -1 },
  { number: 23, input: '!(e)', expected: 2 },
  { number: 24, input: '2 ^ 3', expected: 8 },
  { number: 25, input: '4 ^ 0.5', expected: 2 },
  { number: 27, input: '(-2) ^ 4', expected: 16 },
  { number: 28, input: '0.5 + 0.25', expected: 0.75 },
  { number: 29, input: '1.5 * 2.5', expected: 3.75 },
  { number: 30, input: '5.5 - 2.2', expected: 3.3 },
];

tests.forEach((test) => {
  const result = Number(calculate(test.input));
  console.log(
    `Test ${test.number}: ${result === test.expected ? 'passed' : 'failed'}`
  );
});
