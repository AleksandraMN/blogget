import React from 'react';
import style from './TimePost.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const TimePost = (props) => (
  <time className={style.date} dateTime={props.date}>
    {formatDate(props.date)}
  </time>
);


TimePost.propTypes = {
  date: PropTypes.number,
};
