import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import LogoAppFooter from '../images/logoniadmegencingroovy.png';

const Footer: FunctionComponent = () => {
  return (
    
      <div className="footer-css">
        <Link to="https://www.codonsuncitron.dev" className="brand-logo center"><img src={LogoAppFooter} alt="Niademe Logo"></img></Link>
        <p>© 2024 DÉVELOPPEUSE WEB DE CITRON 🍋</p>
      </div>
    
  );
};

export default Footer;