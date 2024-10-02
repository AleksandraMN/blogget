
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
// import {usePostData} from '../../../hocks/useGetPosts';
// import AuthLoader from '../../../UI/AuthLoader';
import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../../../store/posts/postsAction';
import {Outlet, useParams} from 'react-router-dom';


export const List = () => {
  // const [postsData, loading, error] = usePostData();
  const postsData = useSelector(state => state.posts.data);
  // const loading = useSelector(state => state.posts.loading);
  // const error = useSelector(state => state.posts.error);
  const endList = useRef(null);
  const dispatch = useDispatch();
  const {page} = useParams();
  // console.log('page: ', page);
  // console.log('postsData: ', postsData);
  // console.log('error: ', error);
  // console.log('loading: ', loading);

  useEffect(() => { // первая загрузка
    dispatch(postsRequestAsync(page));
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log('************');
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
  }, [endList.current, postsData]);

  return (
    <>
      <ul className={style.list}>
        { /* loading ? (
          <AuthLoader />
        ) :  */(postsData.map(({data}) => (
            <Post key={data.id}
              postsData={data} />
          ))) }
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
