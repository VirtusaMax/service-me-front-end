import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceProvider from './pages/ServiceProvider'; // Ensure this file exists

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ServiceProvider" element={<ServiceProvider />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
