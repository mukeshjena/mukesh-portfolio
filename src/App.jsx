import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Home from './pages/Home';
import VoidBrowserPrivacyPolicy from './pages/privacy-policy/VoidBrowserPrivacyPolicy';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/void-browser-privacy-policy-v1" element={<VoidBrowserPrivacyPolicy />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
