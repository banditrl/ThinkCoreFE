import { HashRouter as Router } from 'react-router-dom';
import Routes from '../routes/Routes';

const App: React.FC = () => {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
