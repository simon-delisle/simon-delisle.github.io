import React, { useRef } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com'

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_4xzsek9', 'template_dfpguf7', e.target, 'user_c8oPemd1G4IkCi5mMex6N')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
    alert('Email sent. I will get back to you as soon as I see your message.')
}




function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          If you liked what you have seen, you can contact me using the form below.
        </p>
        <p className='footer-subscription-text'>
          I will be glad to answer any questions you may have.
        </p>
        <div className='input-areas'>
          <form onSubmit={sendEmail}>
            <input
              className='footer-input'
              name='name'
              type='name'
              placeholder='Your Name'
            />
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <br></br>
            <textarea
              className='footer-input-text'
              name='message'
              type='message'
              placeholder='Your Message'
            />
            <br></br>
            <br></br>
            <input type='submit' className='submit btn'/>
          </form>
        </div>
        <br></br>
        <p className='footer-subscription-text'>
          You can also write me an email directly (simon.delisle955@gmail.com).
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
