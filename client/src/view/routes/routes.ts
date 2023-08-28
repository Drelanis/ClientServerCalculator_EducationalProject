import { CALCULATOR_ROUTE } from 'utils/consts';
import Calculator from '../pages/Calculator';

interface IRoutes {
  path: string;
  Component: React.JSXElementConstructor<any>;
}

export const publicRoutes: IRoutes[] = [
  {
    path: CALCULATOR_ROUTE,
    Component: Calculator,
  },
];
