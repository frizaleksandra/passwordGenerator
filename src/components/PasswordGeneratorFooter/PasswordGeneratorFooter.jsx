import React from 'react'
import style from './style.module.css'
import copyIcon from '../../assets/copy-paste.svg'

export default function PasswordGeneratorFooter() {
  return (
    <div className={style.root}>
      <div>
        Super password
      </div>
      <img className={style.copy_icon} src={copyIcon} alt="copy icon" />
    </div>
  )
}
