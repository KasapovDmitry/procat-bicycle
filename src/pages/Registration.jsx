import React, { useEffect, useState } from 'react'
import Link from '../components/UI/link/Link'
import MyInput from '../components/UI/input/MyInput'
import { useDispatch } from 'react-redux';
import {setUser} from '../store/redusers/authReducer'
import { useSelector } from 'react-redux'
import { fetchRegistr } from '../store/action-creators/reg';
import { useActions } from '../hooks/useAction';

export default function Registration() {
  const [emailIn, setEmail] = useState('');
  const [passwordIn, setPassword] = useState('');
  const [clientIdIn, setClientId] = useState('');
  const [firstNameIn, setFirstName] = useState('');
  const [lastNameIn, setLastName] = useState('');
  const [approvedIn, setApproved] = useState(false);
  const {error, loading, users, tokenr, values} = useSelector(state => state.reg);
  const [tokr, setTokr] = useState(tokenr)
  const {fetchRegistr} = useActions()

  useEffect(() => {
    if(localStorage.getItem('myToken')) {
      setTokr(localStorage.getItem('myToken'));
    }
console.log(tokr)
  }, [tokr])

  const handleRegistr = (e) => {
    e.preventDefault();
    values.email = emailIn
    values.password = passwordIn


    
    fetchRegistr(values,  'https://sf-final-project-be.herokuapp.com/api/officers')
  }  
  
  return (
    <div className='container registration'>
      <div className="form-wrapper">
        <h1 className="page__title">Регистрация</h1>
        <form className="registration__form-body">
            <div className="form-body--row">
            <label className="form-blok">
              <span>E-mail</span>
                <MyInput 
                    type="email"
                    placeholder='name@example.ru'
                    value={emailIn}
                    onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <label className="form-blok">
                <span>Пароль</span>
                  <MyInput 
                      type="password"
                      placeholder='Пароль'
                      value={passwordIn}
                      onChange={(e) => setPassword(e.target.value)}
                  />
                 </label>
              <label className="form-blok">
                <span>ID</span>
                <MyInput 
                    type="text"
                    placeholder='ID клиента'
                    value={clientIdIn}
                    onChange={(e) => setClientId(e.target.value)}
                />
              </label>
            </div>
            <div className="form-body--row">
            <label className="form-blok">
                <span>Ваше имя</span>
                <MyInput 
                    type="text"
                    placeholder='Имя'
                    value={firstNameIn}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                </label>
                <label className="form-blok">
                <span>Ваша фамилия</span>
                <MyInput 
                    type="text"
                    placeholder='Фамилия'
                    value={lastNameIn}
                    onChange={(e) => setLastName(e.target.value)}
                />
                </label>
                <input 
                    className="form-blok"
                    type="checkbox"
                    placeholder='ID клиента'
                    value={approvedIn}
                    onChange={(e) => setApproved(e.target.value)}
                />
            </div>
            <label className="form__agree">
                <input className="form__agree_check" type="checkbox" />
                <span>Согласиться с условиями и правилами</span>
            </label>
          <div className="form__bottom">
            <button
              className="btn"
              onClick={handleRegistr}
            >Зарегистрироваться</button>
          </div>
        </form>
      </div>
    </div>
  )
}

