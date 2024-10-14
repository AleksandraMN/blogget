import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {clearPosts} from '../../../store/posts/postsSlice';
import {postsRequestAsync} from '../../../store/posts/postsAction.js';
import {
  searchClearPosts,
  searchRequest} from '../../../store/search/searchAction.js';

export const List = () => {
  const dispatch = useDispatch();
  const {page, search} = useParams();
  const endList = useRef(null);
  const posts = useSelector(state => state.posts.data);
  const postsSearch = useSelector(state => state.search.posts);
  const status = useSelector(state => state.posts.status);

  useEffect(() => {
    if (page) {
      dispatch(searchClearPosts());
      dispatch(clearPosts());
    }
  }, [page]);

  useEffect(() => {
    if (!endList.current) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (page) {
          dispatch(postsRequestAsync(page));
        }
        if (search) {
          dispatch(searchRequest(search));
        }
      }
    }, {
      rootMargin: '100px',
    });
    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [endList.current, page, search]);

  return (
    <>
      <ul className={style.list}>
        {status === 'error' && 'ошибка'}

        {posts?.map(({data}) => (
          <Post key={data.id}
            postsData={data} />))}

        {postsSearch?.map(({data}) => (
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
