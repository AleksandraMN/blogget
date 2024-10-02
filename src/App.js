import Header from './components/Header';
import Main from './components/Main';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from './store/tokenReducer';
import {getToken} from './api/token';
import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';
// import {store} from './store';


const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);
  // console.log(token);

  useEffect(() => {
    if (!token) {
      dispatch(updateToken(getToken()));
    }
  }, [token]);

  return (
    <Routes>
      <Route path='*' element={
        <>
          <Header />
          <Main />
        </>
      }
      />
    </Routes>
  );
};

export default App;

/*
const time = () => dispatch => {
  dispatch({type: 'START'});

  setTimeout(() => {
    dispatch({type: 'END'});
  }, 3000);
};
store.dispatch(time());
 */
