import React from 'react'
import classes from './Footer.module.css'
import '../../../styles/grid.css'
import Button from '../button/Button'

function Footer() {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-6">

          </div>
          <div className="col-2 col-sm-10">
            <Button type="outline">Написать нам!</Button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
