import React, { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const stickyOffset = document.getElementById("header").offsetTop;
      setIsSticky(window.scrollY >= stickyOffset);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMenuClick = (event) => {
    event.preventDefault();
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="header" className={isSticky ? "sticky" : ""}>
      <div id="nav-logo">
        <a href="#nav-bar">
          <img src='./src/images/logo.png' alt="logo" id="logo" aria-label="Logo" onClick={handleMenuClick} />
        </a>
      </div>
      <div  className={isMenuOpen ? "nav-menu-bar" : "hidden"}>
        <ul id="nav-menu">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Blog</li>
          <li>Reach out</li>
        </ul>
      </div>
    </div>
  );
}