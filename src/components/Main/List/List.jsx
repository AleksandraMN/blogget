
import style from './List.module.css';
import Post from './Post';
import PropTypes from 'prop-types';
import {usePostData} from '../../../hocks/useGetPosts';
import AuthLoader from '../../../UI/AuthLoader';


export const List = () => {
  const [postsData, loading, error] = usePostData();
  // console.log('postsData: ', postsData);
  // console.log('error: ', error);
  // console.log('loading: ', loading);

  return (
    <ul className={style.list}>
      {loading ? (
        <AuthLoader />
      ) : error ? error : (Array.from(postsData).map(({data}) => (
        <Post key={data.id}
          postsData={data} />
      )))}
    </ul>
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
  posts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
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
