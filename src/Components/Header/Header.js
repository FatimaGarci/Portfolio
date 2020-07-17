import React from 'react';
import '../Header/Header.css'

function Header() {
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
              <span className="color">About Me</span>.
            </span>
          </h1>
          <div class="arrow">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <section id="Home">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster"></link>
        <header className="title">About Me?</header>
        

        <section className="about-me" >
          <div className="column">
            <img src="https://img.icons8.com/dusk/64/000000/find-user-female.png" alt="girl" />
            </div>
            
            <div className="column">
            <p>I'm a junior software engineer trained to be a full-stack developer. In the Road to Hire program, I advance my professionalism and technical skills. I am strongly motivated and determined on every project I am assigned,  I enjoy working in a team environment because it allows me to see how others would solve a problem. </p> </div>
        </section>


        <section class="boxes">
          <div className="box">
            <img src="https://img.icons8.com/dusk/64/000000/resume.png" alt="personal paper" />
            <h3>Skills</h3>
            <p>HTML, CSS, JavaScrip, React, NodeJS, Npm, and MongoDB & MySql.</p> <br />
            <p> Time management,  Dedicated & determined Team player,  Problem Solving,  and Respectful. <br /> GitHub</p>
          </div>
          <div className="box" id="blue" >
            <img src="https://img.icons8.com/dusk/64/000000/code-file.png" alt="code" />
            <h3>Coding</h3>
            <p>I didn’t see myself in the Technical Industry before creating my first website I was  I found out that I really enjoyed coding and creating websites and that I was growing a passion for it, so after creating a website I always felt proud of myself and I want to keep having that feeling.</p>
          </div>
          <div className="box">
            <img src="https://img.icons8.com/dusk/64/000000/goal.png" alt="darts" />
            <h3>Goal</h3>
            <p>I want to be the go-to person in the company as a full-stack developer, I also want to be assigned on a bigger projects and be able to mentor people to help and guide them in the right path.</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Header;