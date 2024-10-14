import React from 'react';
import style from './Comments.module.css';
import TimePost from '../../Main/List/Post/TimePost';
import PropTypes from 'prop-types';
import {Text} from '../../../UI/Text';

export const Comments = ({comments}) => {
  if (comments) {
    return (
      <ul className={style.list}>
        {comments.map((data) => data.body && (
          <li key={data.id} className={style.item}>
            <Text As='h3'
              className={style.author} size={18} tsize={22}>{data.author}</Text>
            <Text As='p'
              className={style.comment} size={14} tsize={18}>{data.body}</Text>
            <TimePost date={data.created} />
          </li>
        ))}
      </ul>
    );
  } else return <h2>Нет комментариев</h2>;
};

Comments.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  tsize: PropTypes.number,
  created: PropTypes.number,
  body: PropTypes.string,
  map: PropTypes.func,
  comments: PropTypes.array,
};
