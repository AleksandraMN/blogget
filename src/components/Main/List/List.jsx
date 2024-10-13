import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
// import AuthLoader from '../../../UI/AuthLoader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Outlet, useParams} from 'react-router-dom';
import {/* changePostsPage,  */clearPosts}
  from '../../../store/posts/postsSlice';
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
  // console.log('postsSearch: ', postsSearch);
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

