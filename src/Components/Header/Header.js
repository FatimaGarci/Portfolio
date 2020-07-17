import React from 'react';
import '../Header/Header.css'
 
  /***********************
    Header Component
   ***********************/
  
  function Header()  {
    return (
      <div>
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
        </div>
      </header>

       <section id="Home">
       <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster"></link>
       <header className="title">About Me?</header>
       <section className="about-me" >
           <div>
               <img src="https://img.icons8.com/dusk/64/000000/find-user-female.png" alt="girl" />
               <p>dcuvhbwdVYBCIVWYICIWUVCVYCWYCVWCILVYWIYCLVWWILYCV</p> </div>
       </section>
       <section class="boxes">
           <div className="box">
               <img src="https://img.icons8.com/dusk/64/000000/resume.png" alt="personal paper" />
               <h3>Experiences</h3>
               <p>Technical Languages: HTML, CSS, JavaScript, Node, React, MYSQL, Bootstrap and MongoDB.</p>
           </div>
           <div class="box">
               <img src="https://img.icons8.com/dusk/64/000000/code-file.png" alt="code" />
               <h3>Coding</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
           </div>
           <div class="box">
               <img src="https://img.icons8.com/dusk/64/000000/goal.png" alt="darts" />
               <h3>Goals</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
           </div>
       </section>
   </section>
</div>
    );
  };

  export default Header;