import React, { useEffect, useState } from 'react'
import Link from '../UI/link/Link'

export default function Logall() {
    const [ isAuth, setIsAuth] = useState(null);
    const logout = (e) => {
       setIsAuth(false);
       localStorage.removeItem('auth')

    }
    useEffect(() => {
      if (localStorage.getItem('auth') !== null) {
        setIsAuth(true)
      }
    }, [])
  return (
    isAuth
    ? <button
        onClick={logout}
        className="btn btn--header"
    >
    Выйти
    </button> 
    : <Link 
        text="Вход / Регистрация"
        href="/login"
        className="btn btn--header"
    />
  )
}

