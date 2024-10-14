import React from 'react';
import style from './AuthorData.module.css';
import PropTypes from 'prop-types';
import {Text} from '../../../../../UI/Text';
import {Link, useParams} from 'react-router-dom';

export const AuthorData = ({title, author, markdown, id}) => {
  const idPost = id;
  const {page, search} = useParams();

  return (
    <div className={style.content}>
      <Text As='h2' className={style.title}>
        <Link className={style.linkPost}
          to={
            `/${page ? 'category' : 'search'}/${page ? page : search}/` +
            `post/${idPost}`
          } >
          <Text
            // bold='bold'
            size={14}
            tsize={22}
            className={style.linkPost}
          >
            {title}
          </Text>
        </Link>
      </Text>
      <Text
        As='a'
        size={12}
        tsize={14}
        color='orange'
        className={style.linkAuthor}
        href='#author'
      >
        {author}
      </Text>
      {/* {(isModalOpen) && (
        <Modal id={idPost}
          closeModal={() => setIsModalOpen(false)}
        />)} */}
    </div>
  );
};

AuthorData.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  id: PropTypes.string,
};
