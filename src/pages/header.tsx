import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import LogoApp from '../images/Pokedex-logo-app.png';

const Header: FunctionComponent = () => {
  return (
    <div className="header-css">
      <div className="header-css-list">
        <a href="https://www.linkedin.com/in/niademe-gencin/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a>
        <a href="https://github.com/ngencin" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
        <a href="https://www.codonsuncitron.dev" target="_blank" rel="noreferrer"><i className="fa-regular fa-lemon"></i></a>
      </div>
      <div className="header-css-pokedex">
        <Link to="/" className=""><img src={LogoApp} alt="Pokedex Logo"></img></Link>
      </div>
    </div>
  );
};

export default Header;