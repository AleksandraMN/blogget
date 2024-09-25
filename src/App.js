import Header from './components/Header';
import Main from './components/Main';
import {Provider} from 'react-redux';
import {AuthContextProvider} from './context/authContext';
import {PostsContextProvider} from './context/postsContext';
// import {TokenContextProvider} from './context/tokenContext';
import {store} from './store';


function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <PostsContextProvider>
          <Header />
          <Main />
        </PostsContextProvider>
      </AuthContextProvider>
    </Provider>
  );
}

export default App;
