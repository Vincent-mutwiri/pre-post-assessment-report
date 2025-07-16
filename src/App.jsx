// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import LandingPage from './pages/LandingPage';
import KenyaPage from './pages/KenyaPage';
import './index.css';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/kenya" element={<KenyaPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
