import React, { useState } from 'react';
import phone from '../images/phone.svg';
import mail from '../images/mail.svg';
import linkedin from '../images/linkedin.svg';
import github from '../images/github.svg';

function Contact() {
  const [contactMethods, setContactMethods] = useState({
    email: false,
    phone: false,
    linkedin: false,
    github: false,
  });

  const handleMouseEnter = (method) => {
    setContactMethods((prevMethods) => ({
      ...prevMethods,
      [method]: true,
    }));
  };

  const handleMouseLeave = (method) => {
    setContactMethods((prevMethods) => ({
      ...prevMethods,
      [method]: false,
    }));
  };

  return (
    <div className="contact-container">
      <div className="contact-head">
        <h1>Reach out to me</h1>
        <p>
          If you'd like to get in touch, please feel free to reach out to
          me through any of the channels below:
        </p>

        <ul>
          <li onMouseEnter={() => handleMouseEnter('email')}
              onMouseLeave={() => handleMouseLeave('email')}>
            <img src={mail} alt="mail"/>
            <a
              href="mailto:harshitha167@gmail.com"
              className={contactMethods.email ? '' : 'hidden'}
            >
              harshitha167@gmail.com
            </a>
          </li>
          <li 
              onMouseEnter={() => handleMouseEnter('phone')}
              onMouseLeave={() => handleMouseLeave('phone')}>
            <img src={phone} alt="phone" />
            <span className={contactMethods.phone ? '' : 'hidden'}>+1 657-410-9970</span>
          </li>
          <li              
              onMouseEnter={() => handleMouseEnter('linkedin')}
              onMouseLeave={() => handleMouseLeave('linkedin')}>
            <img
              src={linkedin} alt="LinkedIn"/>
            <a
              href="www.linkedin.com/in/harshitha167"
              className={contactMethods.linkedin ? '' : 'hidden'}
            >
              Harshitha Rajendran
            </a>
          </li>
          <li               
              onMouseEnter={() => handleMouseEnter('github')}
              onMouseLeave={() => handleMouseLeave('github')}>
            <img src={github} alt="github"/>
            <a
              href="https://github.com/codenameharsh"
              className={contactMethods.github ? '' : 'hidden'}
            >
              codenameharsh
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;