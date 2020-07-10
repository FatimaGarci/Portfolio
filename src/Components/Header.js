import React from 'react';
import './css/Header.css'
 
  /***********************
    Header Component
   ***********************/
  
  function Header()  {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="code" />
        <div className="container">
          <h1>
            <span className="line">Fatima Garcia</span>
            <span className="line">
              <span className="color">Portfolio</span>.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };

  export default Header;