import Header from './components/Header';
import Main from './components/Main';
import {useDispatch, useSelector} from 'react-redux';
import {updateToken} from './store/token/tokenReducer';
import {getToken} from './api/token';
import {Routes, Route} from 'react-router-dom';
import {useEffect} from 'react';

const App = () => {
  const dispatch = useDispatch();
  const token = useSelector(state => state.token.token);

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
