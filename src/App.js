import './App.css';
import Authentication from './components/authentication';
import LandingPage from './components/landingPage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Authentication/>
      <Router>
        <Routes>
          <Route path="/landingPage" element={<LandingPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
