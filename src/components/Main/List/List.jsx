import {useContext} from 'react';
import style from './List.module.css';
import Post from './Post';
import {postsContext} from '../../../context/postsContext';
import PropTypes from 'prop-types';

export const List = () => {
  const {getPosts} = useContext(postsContext);
  console.log(getPosts);

  return (
    <ul className={style.list}>
      {getPosts.map((item) => (
        <Post key={getPosts[item].data.id}
          postsData={getPosts[item].data} />
      ))}
    </ul>
  );
};

List.propTypes = {
  getPosts: PropTypes.array,
  item: PropTypes.array,
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

