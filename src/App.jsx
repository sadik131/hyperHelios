import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Stap2 from './pages/Stap2';
import Stap4 from './pages/stap4';

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/stap2" element={<Stap2 />} />
      {/* stap3 */}
      <Route path="/stap4" element={<Stap4 />} />
    </Routes>
  );
};

export default App;

