import React from 'react'
import './NavBar.module.css'
import '../../../styles/grid.css'
import {Link} from 'react-router-dom'
import classes from './NavBar.module.css'

function NavBar() {
  return (
    <nav>
      <div className="container h-100">
        <div className={classes.nav}>
          <Link to='/main' className={classes.link}>Главная</Link>
          <Link to='/sights' className={classes.link}>Достопримечательности</Link>
          <Link to='/wheretogo' className={classes.link}>Куда сходить</Link>
          <Link to='/login' className={classes.link}>Аккаунт</Link>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
