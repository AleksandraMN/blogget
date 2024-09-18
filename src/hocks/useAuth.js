import {useState, useEffect, useContext} from 'react';
import {tokenContext} from '../context/tokenContext';
import {URL_API} from '../api/const';

export const useAuth = (state) => {
  const [auth, setAuth] = useState([]);
  const {token, delToken} = useContext(tokenContext);

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
        delToken();
      });
  }, [token]);

  return [auth];
};
