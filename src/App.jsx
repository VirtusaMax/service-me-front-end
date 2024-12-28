import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceProvider from './pages/ServiceProvider'; // Ensure this file exists
import PostJob from './pages/post_job_page/postjob_section/post_job';
import FAQPage from './pages/faq_page/FaqPage';
import AboutUs from './section/about/AboutUs';

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-center">
       
        <Routes>
          <Route path="/" element={<Home />} />   
          <Route path="/ServiceProvider" element={<ServiceProvider />} />
          <Route path="/postjob" element={<PostJob />} />
          <Route path="/FAQ" element={<FAQPage/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
