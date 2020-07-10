import React from 'react';
import './css/Home.css'

function About() {
    return (
        <section id="Home">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster"></link>
            <header className="title">About Me?</header>
            <section className="about-me" >
                <div>
                <img src="https://img.icons8.com/dusk/64/000000/find-user-female.png" />
                    <p>dcuvhbwdVYBCIVWYICIWUVCVYCWYCVWCILVYWIYCLVWWILYCV</p> </div>
            </section>
            <section class="boxes">
                <div className="box">
                <img src="https://img.icons8.com/dusk/64/000000/resume.png"/>
                    <h3>Experiences</h3>
                    <p>Technical Languages: HTML, CSS, JavaScript, Node, React, MYSQL, Bootstrap and MongoDB.</p>
                </div>
                <div class="box">
                <img src="https://img.icons8.com/dusk/64/000000/code-file.png" />
                    <h3>Coding</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
                </div>
                <div class="box">
                    <img src="https://img.icons8.com/dusk/64/000000/goal.png" />
                    <h3>Goals</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, expedita?</p>
                </div>
            </section>
        </section>

    );
};

export default About;