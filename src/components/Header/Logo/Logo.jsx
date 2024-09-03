import React from 'react';
import style from './Logo.module.css';
import logo from './img/logo.svg';

export const Logo = () => (
  <a className={style.Link} href='/'>
    <img className={style.Logo} src={logo} alt="Логотип Blogget" />
  </a>
);
