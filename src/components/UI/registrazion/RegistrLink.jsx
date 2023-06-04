import React from 'react'

export default function RegistrLink(props) {
  return (
    <a href="/registration" className="form__bottom_reg">
        {props.text}
    </a>
  )
}

