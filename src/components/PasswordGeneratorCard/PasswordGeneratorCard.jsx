import React, { useState } from 'react'
import style from './style.module.css'
import PasswordGeneratorHeader from '../PasswordGeneratorHeader/PasswordGeneratorHeader'
import PasswordGeneratorBody from '../PasswordGeneratorBody/PasswordGeneratorBody'
import PasswordGeneratorFooter from '../PasswordGeneratorFooter/PasswordGeneratorFooter'

export default function PasswordGeneratorCard() {

  const [password, setPassword] = useState('amazing password');

  return (
    <div className={style.root}>
      <div className={style.main}>
        <PasswordGeneratorHeader />
        <PasswordGeneratorBody onSubmit={setPassword} />
      </div>

      <div className={style.footer}>
        <PasswordGeneratorFooter password={password} />
      </div>
    </div>
  )
}
