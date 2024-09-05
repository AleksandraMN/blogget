import React from 'react';
import style from './AuthorRating.module.css';
import PropTypes from 'prop-types';

export const AuthorRating = (props) => (
  <div className={style.rating}>
    <button className={style.up} aria-label='Увеличить рейтинг' />
    <p className={style.ups}>{props.ups}</p>
    <button className={style.down} aria-label='Понизить рейтинг' />
  </div>
);

AuthorRating.propTypes = {
  ups: PropTypes.number,
};
