import React from 'react';
import './css/Contact.css'

  /***********************
    Contact Component
   ***********************/
  
  function Contact (){
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <h2 className="title">
                Want to contact me?
              </h2>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <a href="mailto:Fatima.R.Lopez@outlook.com" className="mail">Fatima.R.Lopez@outlook.com</a>
                :
              </p>
            </div>
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <div className="zoomButton2">
              <input className="button" id="submit" value="Submit" type="submit" />
            </div>
          </form>
        </div>
      </section>
    );
  };
  
  export default Contact;