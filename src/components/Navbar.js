import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <h3 to='/' className='navbar-logo' onClick={closeMobileMenu}>
            SIMON DELISLE
          </h3>
          <div class='social-icons'>
            <Link
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href='https://www.linkedin.com/in/simon-delisle/'>
                <i class='fab fa-linkedin' />
              </a>
            </Link>
              
            <Link
              class='social-icon-link twitter'
              target='_blank'
              aria-label='LinkedIn'
            >
              <a href='https://github.com/simon-delisle'>
                <i class='fab fa-github' />
              </a>
            </Link>
          </div>

        </div>
      </nav>

    </>
  );
}

export default Navbar;
