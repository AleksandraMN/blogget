/* import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/postsAction';

export const usePostData = (page) => {
  const children = useSelector(state => state.posts.data);
  // const token = useSelector(state => state.token.token);
  // const status = useSelector(state => state.posts.status);
  const after = useSelector(state => state.posts.after);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsRequestAsync(page));
  }, [page]);
  return [children, after];
};
 */
