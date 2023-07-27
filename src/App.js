import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom'
import HomeScreen from './components/home/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <HomeScreen />
      </div>
    </BrowserRouter>
  );
}

export default App;
