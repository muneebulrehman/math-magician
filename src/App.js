import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Calculator from './components/Calculator';

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Calculator />
    </div>
  </BrowserRouter>
);

export default App;
