import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { fetchCases } from '../store/action-creators/case';
import { useActions } from '../hooks/useAction';

export default function AllCases() {
  const {error, loading, cases} = useSelector(state => state.cases);
  const {fetchCases} = useActions()


  useEffect(() => {
    fetchCases()
  }, [])
  
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
    <div className='container container-person'>
      <h1 className="page__title">Все кражи</h1>
        <table className="iksweb">
          <tbody>
            <tr>
              <th className='table__id'>id</th>
              <th className='table__name'>Лицензионный номер</th>
              <th className='table__email'>Тип</th>
              <th className='table__check'>Цвет</th>
              <th className='table__del'>Описание</th>
              <th className='table__del'>Удалить</th>
            </tr>

            {cases.map(cases => 
            <tr key={cases.id}>
              <td>{cases.id}</td>
              <td>{cases.title}</td>
              <td>my-adress@mail.ru</td>
              <td></td>
              <td>Удалить</td>
            </tr>
            )}

          </tbody>
        </table>
      </div>
  )
}

