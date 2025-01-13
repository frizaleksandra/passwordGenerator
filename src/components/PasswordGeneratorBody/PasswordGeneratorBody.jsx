import React from 'react'
import style from './style.module.css'

export default function PasswordGeneratorBody() {
  return (
    <form>
      <div className={style.grid_container}>
        <div className={style.grid_item}>
          size
          <select defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>

        <div className={style.grid_item}>
          uppercase
          <input type="checkbox" defaultChecked/>
        </div>

        <div className={style.grid_item}>
          numbers
          <input type="checkbox" defaultChecked/>
        </div>

        <div className={style.grid_item}>
          specials
          <input type="checkbox" defaultChecked/>
        </div>
      </div>

      <div className={style.btn_container}>
        <button className={style.btn_generate}>GENERATE</button>
      </div>
      
    </form>
  )
}
