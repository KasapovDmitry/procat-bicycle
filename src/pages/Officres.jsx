import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { fetchUsers } from '../store/action-creators/user';
import { useActions } from '../hooks/useAction';

export default function Personal() {
  const {error, loading, users, token} = useSelector(state => state.user);
  const [tok, setTok] = useState(token)
  const {fetchUsers} = useActions()

  useEffect(() => {
    setTok(localStorage.getItem('myToken'));
    fetchUsers(tok, 'get', 'https://sf-final-project-be.herokuapp.com/api/officers/');
  }, [tok, error])
  
  if (loading) {
    return (
      <main className="main">
      <div className='container container-person'>
      <h1 className="page__title">Все сотрудники</h1>
      <p>Идет загрузка...</p>
      

      </div>
    </main>
    )
  }
  if (error) {
    return (
      <main className="main"> 
      <div className='container container-person'>
      <h1 className="page__title">Все сотрудники</h1>
      <p>Произошла ошибка, повторите позже</p>
      

      </div>
    </main>
    )
  }
  return (
    <main className="main"> 
      <div className='container container-person'>
      <a href="/registration" className="btn">
        Зарегистрировать нового
      </a>
      <h1 className="page__title">Все сотрудники</h1>
        <table className="iksweb">
          <tbody>
            <tr>
              <th className='table__id'>id</th>
              <th className='table__name'>ФИО</th>
              <th className='table__email'>E-mail</th>
              <th className='table__check'>Одобрен</th>
              <th className='table__del'></th>
            </tr>

            {(users || []).map(user => 
            <tr key={user._id}>
              <td>{user._id}</td>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{user.email}</td>
              <td>{user.approved ? "Да" : "Нет"}</td>
              <td>Удалить</td>
            </tr>
            )}
           
          </tbody>
        </table>
      </div>
    </main>
  )
}

