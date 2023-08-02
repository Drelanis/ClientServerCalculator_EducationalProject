import { Navigate, Route, Routes } from 'react-router-dom';
import { CALCULATOR_ROUTE } from '../../../utils/consts';
import { publicRoutes } from '../../../view/routes/routes';
import { FC } from 'react';

const AppRouter: FC = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} key={path} />
      ))}
      {<Route path="/*" element={<Navigate to={CALCULATOR_ROUTE} />} />}
    </Routes>
  );
};

export default AppRouter;
