import React from 'react'
import style from './style.module.css'
import PasswordGeneratorHeader from '../PasswordGeneratorHeader/PasswordGeneratorHeader'
import PasswordGeneratorBody from '../PasswordGeneratorBody/PasswordGeneratorBody'
import PasswordGeneratorFooter from '../PasswordGeneratorFooter/PasswordGeneratorFooter'

export default function PasswordGeneratorCard() {
  return (
    <div className={style.root}>
      <div className={style.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody />
      </div>

      <div className={style.footer}>
        <PasswordGeneratorFooter />
      </div>
    </div>
  )
}
