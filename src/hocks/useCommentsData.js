import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  postCommentsRequestAsync,
} from '../store/postComments/postCommentsAction';

export const useCommentsData = (id) => {
  // console.log(id);
  // const token = useSelector(state => state.token.token);
  const commentsData = useSelector(state => state.postComments.data);
  const loading = useSelector(state => state.postComments.loading);
  const error = useSelector(state => state.postComments.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postCommentsRequestAsync(id));
  }, [id]);

  return [commentsData, loading, error];
};

