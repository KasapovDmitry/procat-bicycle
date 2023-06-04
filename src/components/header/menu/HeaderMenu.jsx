import React from 'react'
import Link from '../../UI/link/Link'

export default function HeaderMenu(props) {
  return (
    <nav className={`nav ${props.className}`}>
        <ul className="nav__list">
            <li className="nav__item nav__item--menu">
                <Link 
                    text="Сообщить о краже"
                    href="/message"
                    className="nav__link"
                />
            </li>
            <li className="nav__item">
                <Link 
                    text="Сотрудники"
                    href="/personal"
                    className="nav__link"
                />
            </li>
            <li className="nav__item">
                <Link 
                    text="Кражи"
                    href="/thefts"
                    className="nav__link"
                />
            </li>
        </ul>
    </nav>
  )
}
