import React from 'react'
import style from './style.module.css'
import lockIcon from '../../assets/lock.svg'

export default function PasswordGeneratorHeader() {
  return (
    <div className={style.root}>
      <div className={style.title}>
        Password Generator
      </div>
      <img className={style.icon} src={lockIcon} alt="lock icon" />
    </div>
  )
}
