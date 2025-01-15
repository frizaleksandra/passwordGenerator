import React from 'react'
import style from './style.module.css'
import { generatePassword } from '../../lib/password';

export default function PasswordGeneratorBody(props) {

  const submit = (event) =>{
    event.preventDefault(); // this can stop reload page after button click 
    let formData = {}
    new FormData(event.currentTarget).forEach((value, key)=>{
      formData[key] = value;
    })
    //generate a random password using formData
    // let generatedPassword = Math.random();
    props.onSubmit(generatePassword(formData));
  }

  return (
    <form onSubmit={submit}>
      <div className={style.grid_container}>
        <div className={style.grid_item}>
          size
          <select name='size' defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>

        <div className={style.grid_item}>
          uppercase
          <input name='uppercase' type="checkbox" defaultChecked/>
        </div>

        <div className={style.grid_item}>
          numbers
          <input name='numbers' type="checkbox" defaultChecked/>
        </div>

        <div className={style.grid_item}>
          specials
          <input name='specials' type="checkbox" defaultChecked/>
        </div>
      </div>

      <div className={style.btn_container}>
        <button type='submit' className={style.btn_generate}>GENERATE</button>
      </div>
      
    </form>
  )
}
