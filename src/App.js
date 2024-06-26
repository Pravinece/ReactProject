import './App.css';
import Authentication from './components/authentication';
import LandingPage from './components/landingPage';
import Choice from './components/home';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignInComponent from './components/signin';
import SignUpComponent from './components/signup';
function App() {
  return (
    <div className="App">
      {/* <Authentication/> */}
      <Router>
        <Routes>
          <Route path="/" element={<Authentication />} />
          <Route path="/ReactProject" element={<Authentication />} />
          {/* <Route path="/landingPage" element={<LandingPage />} /> */}
          <Route path="/landing" element={<LandingPage />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
