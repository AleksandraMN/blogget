import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
// import AuthLoader from '../../../UI/AuthLoader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {changePostsPage, clearPosts}
  from '../../../store/posts/postsSlice';
import {postsRequestAsync} from '../../../store/posts/postsAction.js';

export const List = () => {
  const dispatch = useDispatch();
  const {page} = useParams();
  // console.log('page: ', page);
  const endList = useRef(null);
  const posts = useSelector(state => state.posts.data);
  const status = useSelector(state => state.posts.status);
  // const after = useSelector(state => state.posts.after);
  // console.log('posts: ', posts);
  // console.log('status: ', status);

  useEffect(() => {
    dispatch(clearPosts());
    if (page) {
      dispatch(changePostsPage(page));
      dispatch(postsRequestAsync(page));
    }
  }, [page]);

  useEffect(() => {
    if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '200px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current]);

  return (
    <>
      <ul className={style.list}>
        {status === 'error' && 'ошибка'}
        {posts?.map(({data}) => (
          <Post key={data.id}
            postsData={data} />))
        }
        <li ref={endList} className={style.end}/>
      </ul>
      <Outlet />
    </>
  );
};

List.propTypes = {
  postsData: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  data: PropTypes.object,
  id: PropTypes.number,
  map: PropTypes.func,
};

/* Образец:
const postsData = [
    {
      thumbnail: '',
      title: 'Title1',
      author: 'Nickname1',
      ups: 75,
      date: '2024-09-04T14:36:00.000Z',
      id: '56',
    },
    {
      thumbnail: '',
      title: 'Title2',
      author: 'Nickname2',
      ups: 30,
      date: '2024-09-05T18:10:00.000Z',
      id: '135',
    },
  ]; */

