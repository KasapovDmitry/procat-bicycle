import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import MyInput from '../components/UI/input/MyInput.jsx';
import RegistrLink from '../components/UI/registrazion/RegistrLink.jsx';
import { useSelector } from 'react-redux'
import { fetchAuth } from '../store/action-creators/auth';
import { useActions } from '../hooks/useAction';
import {setUser} from '../store/redusers/authReducer'

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {error, loading, values} = useSelector(state => state.auth);
  const {fetchAuth} = useActions()

  const handleAuth = (e) => {
    e.preventDefault();
    values.email = email
    values.password = password
    
    fetchAuth(values)

    localStorage.setItem('auth', 'true')
    navigate('/');
    setEmail('')
    setPassword('')
    
  }  

 
  return (
    <div className='container '>
      <div className="form-wrapper">
        <h1 className="page__title">Вход</h1>
        <form className="form-body">
        <label className="form-blok">
            <span>E-mail</span>
            <MyInput 
                type="email"
                placeholder='Введите логин'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="form-blok">
            <span>Пароль</span>
            <MyInput 
                type="password"
                placeholder='Введите пароль'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <div className="form__bottom">
          <button
              className="btn"
              onClick={handleAuth}
              >Войти</button>
           <RegistrLink 
            text="зарегистрироваться"
           />
          </div>
          
        </form>
        
      </div>
    </div>
  )
}

