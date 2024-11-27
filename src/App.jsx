import React from 'react';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

function App() {
  return (
    <div className="flex flex-col justify-center">
      <Navbar />
      <div className="App">
        <h1 className="text-3xl font-bold text-center my-8">Welcome to Service Me!</h1>
        <Home />
      </div>
    </div>
  );
}

export default App;
