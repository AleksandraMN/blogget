import React from 'react';
import style from './AuthorPhoto.module.css';
import notphoto from './img/notphoto.jpg';

export const AuthorPhoto = () => (
  <img className={style.img} src={notphoto} alt="title" />
);


