//U61753810
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Gallery />} />
          {/* Additional routes can be added here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

