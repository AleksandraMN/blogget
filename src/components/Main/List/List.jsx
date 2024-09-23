
import style from './List.module.css';
import Post from './Post';
// import {postsContext} from '../../../context/postsContext';
import PropTypes from 'prop-types';
import {usePostData} from '../../../hocks/useGetPosts';


export const List = () => {
  const getPosts = usePostData();
  return (
    <ul className={style.list}>
      {getPosts.map(({data}) => (
        <Post key={data.id}
          postsData={data} />
      ))}
    </ul>
  );
};

List.propTypes = {
  getPosts: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
  ]),
  data: PropTypes.object,
  id: PropTypes.number,
};

/* const postsData = [
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
    {
      thumbnail: '',
      title: 'Title3',
      author: 'Nickname3',
      ups: 17,
      date: '2024-09-06T04:09:00.000Z',
      id: '189',
    },
    {
      thumbnail: '',
      title: 'Title4',
      author: 'Nickname4',
      ups: 29,
      date: '2024-09-08T06:57:00.000Z',
      id: '79',
    },
  ]; */
