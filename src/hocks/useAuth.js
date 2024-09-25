import {useState, useEffect} from 'react';
// import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';
import {useDispatch, useSelector} from 'react-redux';
import {deleteToken} from '../store/index';

export const useAuth = (state) => {
  const token = useSelector(state => state.token);
  // console.log('token : ', token);
  const [auth, setAuth] = useState([]);
  const dispatch = useDispatch();
  // const {token, delToken} = useContext(tokenContext);

  useEffect(() => {
    if (!token) return setAuth({});
    // console.log('token: ', token);

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.status === 401) {
          throw new Error(response.status);
        }
        return response.json();
      })
      .then(({name, icon_img: iconImg}) => {
        // console.log({name, icon_img: iconImg});
        const img2 = iconImg.replace(/\?.*$/, '');
        setAuth({name, img2});
      })
      .catch((err) => {
        console.error(err);
        setAuth({});
        dispatch(deleteToken(''));
      });
  }, [token]);


  return [auth];
};
