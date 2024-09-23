import React from 'react';
import style from './TimePost.module.css';
import formatDate from '../../../../../utils/formatDate';
import PropTypes from 'prop-types';

export const TimePost = ({date}) => {
  if (date) {
    return (
      <time className={style.date} dateTime={date}>
        {formatDate(date)}
      </time>
    );
  } else return null;
};

TimePost.propTypes = {
  date: PropTypes.number,
};
