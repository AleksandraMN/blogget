import React, {useEffect, useState} from 'react';
import style from './AuthorPhoto.module.css';
import PropTypes from 'prop-types';
import notphoto from './img/notphoto.jpg';

export const AuthorPhoto = ({thumbnail}) => {
  const [srcPhoto, setSrcPhoto] = useState(notphoto);

  useEffect(() => {
    if (thumbnail) {
      setSrcPhoto(thumbnail);
    }
  }, [thumbnail]);

  return (
    <img className={style.img}
      src={srcPhoto} alt="title" />
  );
};

AuthorPhoto.propTypes = {
  thumbnail: PropTypes.string,
  src: PropTypes.string,
};
