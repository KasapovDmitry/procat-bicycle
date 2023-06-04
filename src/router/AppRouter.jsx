import React, { useEffect, useState} from 'react'
import { Route, Routes} from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../router/index.js';


export default function AppRouter() {
  const [ isAuth, setIsAuth] = useState(null);
  useEffect(() => {
    if (localStorage.getItem('auth') !== null) {
      setIsAuth(true)
    }
  }, [])
  return (
    isAuth
      ? 
      <Routes>
          {privateRoutes.map(route => 
            <Route 
              key={route.id}
              element={route.component} 
              path={route.path} 
              exact={route.exact}
            />
          )}
        </Routes>
      
      : <Routes>
          {publicRoutes.map(route => 
            <Route 
              key={route.id}
              element={route.component} 
              path={route.path} 
              exact={route.exact}
            />
          )}
        </Routes>
  )
}
