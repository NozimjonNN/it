import React from 'react';

const NavBar = () => (
  <nav style={{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#0073e6',
    padding: '10px'
  }}>
    <a href="#about" style={{
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s'
    }}>О нас</a>
    <a href="#gallery" style={{
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s'
    }}>Галерея</a>
    <a href="#contact" style={{
      color: 'white',
      textDecoration: 'none',
      margin: '0 15px',
      fontSize: '18px',
      fontWeight: 'bold',
      transition: 'color 0.3s'
    }}>Контакты</a>
  </nav>
);

export default NavBar;
