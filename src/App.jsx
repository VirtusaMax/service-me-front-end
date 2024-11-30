// eslint-disable-next-line no-unused-vars
import React from 'react';
import Home from './pages/Home';
import Header from './components/custom-components/Header';

function App() {
  return (
    <div className="App">
      {/* Navbar Section */}
      <Header />
      
      {/* Main Content */}
      <div className="flex justify-center">
        <Home />
      </div>

      {/* Welcome Text */}
      <h1 className="text-3xl font-bold text-center my-8">Welcome to Service Me!</h1>
    </div>
  );
}

export default App;
