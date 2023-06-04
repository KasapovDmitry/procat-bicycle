import React from 'react'
import MyInput from '../components/UI/input/MyInput'
import Link from '../components/UI/link/Link'

export default function Message() {
  return (
    <main className="main"> 
        <div className="container container-person">
          <h1 className="page__title">Сообщить о краже</h1>
          <form className="form-message">
            <div className="form-body--row row2">
                  <MyInput 
                      label="Лицензионный номер"
                      className="form-blok"
                      type="text"
                      placeholder='Введите номер'
                  />
                  <MyInput 
                      label="ФИО владельца"
                      className="form-blok"
                      type="password"
                      placeholder='ФИО'
                  />
              </div>
              <div className="form-body--row row3">
                  <MyInput 
                      label="Тип"
                      className="form-blok"
                      type="text"
                      placeholder='Имя'
                  />
                  <MyInput 
                      label="Цвет"
                      className="form-blok"
                      type="text"
                      placeholder='Цвет'
                  />
                  <MyInput 
                      label="Дата"
                      className="form-blok"
                      type="textarea"
                      placeholder='Дата'
                  />
              </div>
              <div className="form-body--row row1">
                <MyInput 
                      label="Сотрудник"
                      className="form-blok"
                      type="text"
                      placeholder='Выбирете...'
                  />
              </div>
              <div className="form-body--row">
                <label>Описание</label>
                <textarea className="form-blok" placeholder='Опишите велосипед'>
                </textarea> 
              </div>
              <label className="form__agree">
                  <input className="form__agree_check" type="checkbox" />
                  <span>Согласиться с условиями и правилами</span>
              </label>
            <div className="form__bottom">
              <Link
                text="Сообщить о краже"
                href="/login"
                className="btn"
              />
            </div>
          </form>
        </div>
    </main>
  )
}

