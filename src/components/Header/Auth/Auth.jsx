import React from 'react';
import style from './Auth.module.css';
import PropTypes from 'prop-types';
import {ReactComponent as LoginIcon} from './img/login.svg';

export const Auth = (props) => {
  const img = <LoginIcon className={style.svg} width={128} height={128}/>;
  return (
    <button className={style.button}>
      {props.auth ? props.auth : img}
    </button>
  );
};

Auth.propTypes = {
  auth: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
  ]),
};
