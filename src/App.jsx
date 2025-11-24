import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DownloadPage from './pages/DownloadPage';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/download" element={<DownloadPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
