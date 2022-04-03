import React from 'react'
import classes from './Input.module.css'

function Input({placeholder, label, type}) {
  return (
    <div className={classes.input}>
      <label>{label}</label>
      <input placeholder={placeholder} className={classes.default} type={type}/>
    </div>
  )
}

export default Input