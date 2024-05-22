import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TinyUrl from './TinyUrl';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TinyUrl />} />        
        <Route path="/:id" element={<TinyUrl />} />    
      </Routes>
    </Router>
  );
}

export default App
