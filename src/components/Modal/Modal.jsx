import React, {useEffect, useRef} from 'react';
import style from './Modal.module.css';
import {ReactComponent as CloseIcon} from './img/close.svg';
import PropTypes from 'prop-types';
import Markdown from 'markdown-to-jsx';
import ReactDOM from 'react-dom';
import {useCommentsData} from '../../hocks/useCommentsData';
import Comments from './Comments';
import FormComment from './FormComment';
import AuthorRating from '../Main/List/Post/AuthorRating';
import TimePost from '../Main/List/Post/TimePost';
import AuthLoader from '../../UI/AuthLoader';
import {useNavigate, useParams} from 'react-router-dom';


export const Modal = () => {
  const {id, page} = useParams();
  const navigate = useNavigate();
  const [post, comments, status] = useCommentsData(id);
  const overlayRef = useRef(null);
  const {title, selftext, author, ups, created} = post;


  const handlerClick = e => {
    const target = e.target;
    if (target === overlayRef.current) {
      // closeModal();
      navigate(`/category/${page}`);
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
      // closeModal();
      navigate(`/category/${page}`);
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
        {status === 'loading' && <AuthLoader />}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <>
            <h2 className={style.title}>
              {title}
            </h2>
            <div>
              <Markdown options={{
                overrides: {
                  a: {
                    props: {
                      target: '_blank',
                    },
                  },
                },
              }}>
                {selftext}
              </Markdown>
            </div>
            <p className={style.author}>
              {author}
            </p>
            <AuthorRating ups={ups} />
            <TimePost date={created} />
            <FormComment/>
            <Comments comments={comments} />
          </>
        )}

        <button className={style.close}
          onClick={() => navigate(`/category/${page}`)}>
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
  selftext: PropTypes.string,
  closeModal: PropTypes.func,
  comments: PropTypes.object,
  post: PropTypes.object,
};

