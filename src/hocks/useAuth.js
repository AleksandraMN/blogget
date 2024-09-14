import {useState, useEffect} from 'react';

export const useAuth = (state, token, delToken, URL_API) => {
  const [auth, setAuth] = useState([]);

  useEffect(() => {
    if (!token) return setAuth({});
    // console.log('token: ', token);

    fetch(`${URL_API}/api/v1/me`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    })
      .then(response => response.json())
      .then(({name, icon_img: iconImg}) => {
        // console.log({name, icon_img: iconImg});
        const img2 = iconImg.replace(/\?.*$/, '');
        setAuth({name, img2});
      })
      .catch(err => {
        if (err.response.status === 401) {
          localStorage.removeItem('bearer');
        }
        console.err(err);
        setAuth({});
      });
  }, [token]);

  return [auth];
};
