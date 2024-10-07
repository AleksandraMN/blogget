import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  postCommentsRequestAsync,
} from '../store/postComments/postCommentsAction';

export const useCommentsData = (id) => {
  const post = useSelector(state => state.comments.data);
  const comments = useSelector(state => state.comments.comments);
  const status = useSelector(state => state.comments.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCommentsRequestAsync(id));
  }, [id]);

  return [post, comments, status];
};

