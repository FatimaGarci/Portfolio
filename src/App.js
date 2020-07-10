import React from 'react';
import Header from './Components/Header';
import Home from './Components/Home';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
       <Header />
      <Home /> 
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;