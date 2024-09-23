import React, {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
// import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hocks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import AuthorPhoto from '../Main/List/Post/AuthorPhoto';
import AuthorRating from '../Main/List/Post/AuthorRating';
import TimePost from '../Main/List/Post/TimePost';

export const Modal = ({id, closeModal}) => {
  const commentsData = useCommentsData(id);
  const [post, comments] = commentsData;
  // console.log('comments: ', comments);
  // console.log('post: ', post);
  const overlayRef = useRef(null);

  const handlerClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('click', handlerClick);
    return () => {
      document.removeEventListener('click', handlerClick);
    };
  }, []);

  const handlerKeyup = (e) => {
    if (e.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    document.addEventListener('keyup', handlerKeyup);
    return () => {
      document.removeEventListener('keyup', handlerKeyup);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={style.overlay} ref={overlayRef}>
      <div className={style.modal}>
        {post ? (
          <>
            <AuthorPhoto thumbnail={post.thumbnail} />
            <h2 className={style.title}>{post.title}</h2>
            <p className={style.author}>{post.author}</p>
            <AuthorRating ups={post.ups} />
            <TimePost date={post.created} />
            <FormComment/>
            <Comments comments={comments} />
          </>
        ) :
        <h2>Загрузка...</h2>}

        <button className={style.close} onClick={closeModal}>
          <CloseIcon />
        </button>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};

Modal.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  markdown: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.object,
  post: PropTypes.object,
};

