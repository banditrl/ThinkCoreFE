import { useEffect } from 'react';
import { Routes as ReactRoutes, Route, useNavigate } from 'react-router-dom';
import HomeModule from '../modules/home/HomeModule';
import { RoutesEnum } from './routesEnum';

const Routes: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (window.electron) {
      window.electron.onNavigateToHome(() => {
        navigate(RoutesEnum.Home);
      });
    }
  }, [navigate]);

  return (
    <ReactRoutes>
      <Route path={RoutesEnum.Home} element={<HomeModule />} />
    </ReactRoutes>
  );
};

export default Routes;
