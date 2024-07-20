import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Gallery} />
          {/* Additional routes can be added here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;

