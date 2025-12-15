import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import VexFastPrivacyBrowserPrivacyPolicy from './pages/privacy-policy/VoidBrowserPrivacyPolicy';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vex-fast-privacy-browser-privacy-policy" element={<VexFastPrivacyBrowserPrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
