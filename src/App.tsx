import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, NotFound, Travel, Resume } from './pages';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
