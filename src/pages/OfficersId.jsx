import React from 'react'
import Button from '../components/UI/button/Button'

export default function OneStaff() {
  return (
    <div className='container container-person'>
      <h1 className="page__title">Карточка сотрудника</h1>
      <div className="person__wrap">
        <div className="person__foto">
          <img src="../assets/img/avatar_default.png" alt="Фото" />
        </div>
        <div className="person__info">
          <div className="person__info_row">
            <p className="person__info_name">Имя</p>
            <p className="person__info_meaning">Петров</p>
          </div>
          <div className="person__info_row">
            <p className="person__info_name">Фамилия</p>
            <p className="person__info_meaning">Петров</p>
          </div>
          <div className="person__info_row">
            <p className="person__info_name">E-mail</p>
            <p className="person__info_meaning">Петров</p>
          </div>
          <div className="person__info_row">
            <p className="person__info_name">Пароль</p>
            <p className="person__info_meaning">Петров</p>
          </div>
          <div className="person__info_row">
            <p className="person__info_name">ID</p>
            <p className="person__info_meaning">Петров</p>
          </div>
          <div className="person__info_row">
            <p className="person__info_name">Одобрен</p>
            <div className="person__info_checkbox">
            <label className="switch">
              <input type="checkbox" defaultChecked/>
              <span className="approved round"></span>
            </label>
            </div>
          </div>
          <div className="person__btn_wrap">
            <Button 
              className="btn"
              text="Сохранить изменения"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
