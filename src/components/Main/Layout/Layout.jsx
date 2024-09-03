import React from 'react';
import style from './Layout.module.css';
import PropTypes from 'prop-types';

export const Layout = (props) => (
  <div className={style.container}>
    {props.children}
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};
