import React, { useEffect, useState } from 'react';
import MyHeader from './components/header/MyHeader';
import MyFooter from './components/footer/MyFooter';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './router/AppRouter';
import { Provider } from 'react-redux';
import { store } from './store';
import { keyId } from './key';

function App() {
  const [isAuth, setIsAuth] = useState(null);

  useEffect(() => {
    if(localStorage.getItem('auth')) {
      setIsAuth(false);
    }
  }, []);
  return (
    <div className="sait">
      <Provider 
      store={store}
      setIsAuth={isAuth}
      >
          <MyHeader />
          <BrowserRouter>
              <AppRouter />
          </BrowserRouter>
          <MyFooter />
      </Provider>
    </div>
  );
}

export default App;
