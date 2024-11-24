import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import HomeModule from '../modules/home/HomeModule';
import { RoutesConstants } from '../routes/routesConstants';

function App() {
  return (
    <Router>
      <Routes>
        <Route path={RoutesConstants.home} element={<HomeModule />} />
      </Routes>
    </Router>
  );
}

export default App;