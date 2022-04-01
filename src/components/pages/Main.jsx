import React from 'react'
import '../../styles/app.css'
// import classes from '../styles/Main.module.css'
import classes from './styles/Main.module.css'

function Main() {
  return (
    <div className={classes.welcome_img}>
      <div className="container h-100">
        <div className={classes.welcome_block}>
          <h1 className={classes.welcome_title}>Добро пожаловать в Тобольск!</h1>
        </div>
      </div>
    </div>
  )
}

export default Main
