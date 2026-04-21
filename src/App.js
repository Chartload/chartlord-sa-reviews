import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Chartlordai from './components/Chartlordai';
import './App.css';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <Chartlordai />
      </div>
    </HelmetProvider>
  );
}

export default App;
