import React from 'react';
import style from './AuthorPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const AuthorPhoto = ({thumbnail}) => (
  <img className={style.img}
    src={thumbnail ? thumbnail : notphoto} alt="title" />
);


AuthorPhoto.propTypes = {
  thumbnail: PropTypes.string,
  src: PropTypes.string,
};
