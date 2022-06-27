import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Home />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
