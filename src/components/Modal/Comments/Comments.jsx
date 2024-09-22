import React from 'react';
import style from './Comments.module.css';
import TimePost from '../../Main/List/Post/TimePost';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';


export const Comments = (props) =>
  // console.log(style);
  (
    <ul className={style.list}>
      <li className={style.item}>
        <Text As='h3'
          className={style.author} size={18} tsize={22}>{props.author}</Text>
        <Text As='p'
          className={style.comment} size={14} tsize={18}>{props.body}</Text>
        <TimePost date={props.date} />
      </li>
    </ul>
  )
;

Comments.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  tsize: PropTypes.number,
  date: PropTypes.string,
  body: PropTypes.string,
};
