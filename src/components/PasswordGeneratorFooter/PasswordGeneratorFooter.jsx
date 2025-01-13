import React from 'react'
import style from './style.module.css'
import copyIcon from '../../assets/copy-paste.svg'

export default function PasswordGeneratorFooter(props) {
  return (
    <div className={style.root}>
      <div>
        {props.password}
      </div>
      <img className={style.copy_icon} src={copyIcon} alt="copy icon" />
    </div>
  )
}
