import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Components/Header/Header';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route path='/home' component={Home} />
        <Route exact path='/portfolio' component={Portfolio} />
        <Route exact path='/contact' component={Contact} />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;