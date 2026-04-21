import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import TrustPilotReviews from './components/TrustPilotReviews';
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
