import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './UI/Navbar';
import Home from './UI/Home';
import Quote from './UI/Quote';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quotes" element={<Quote />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;
