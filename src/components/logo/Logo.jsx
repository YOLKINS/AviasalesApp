import React from 'react';

import logo from '../../images/Logo.svg';
import './Logo.scss';

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo"></img>
    </div>
  );
};

export default Logo;
