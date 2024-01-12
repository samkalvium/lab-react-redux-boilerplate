import './App.css'
import LikeCounter from './redux-like-counter/LikeCounter'
import { Provider } from 'react-redux'
import store from './redux-like-counter/Store'

function App() {

  return (
    <>
      <Provider store={store}>
        <LikeCounter />
      </Provider>
    </>
  );
};

export default App
