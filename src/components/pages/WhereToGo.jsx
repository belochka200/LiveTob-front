import React from 'react'
import '../../styles/grid.css'
import '../../styles/app.css'
import Footer from '../ui/footer/Footer'
import classes from './styles/WhereToGo.module.css'

function WhereToGo() {
  return (
    <div>
      <div className="container content">
        <div className="w-100 text-center">
          <h1>Куда сходить</h1>
          <div className="row my-5 justify-content-center">
            <div className={`col-sm-12 col-3 ${classes.block} my-1 d-flex justify-content-center align-items-center`}>
              <div className={`${classes.watch}`}>
                <p>Что посмотреть</p><br />
                <p className={classes.subtitle}>Достопримечательности</p>
              </div>
            </div>
            <div className={`col-sm-12 col-3 ${classes.block} my-1 d-flex justify-content-center align-items-center`}>
              <div className={`${classes.eat}`}>
                <p>Где поесть</p><br />
                <p className={classes.subtitle}>Кафе, бары, рестораны и т.д.</p>
              </div>
            </div>
            <div className={`col-sm-12 col-3 ${classes.block} my-1 d-flex justify-content-center align-items-center`}>
              <div className={`${classes.sleep}`}>
                <p>Где отдохнуть</p><br />
                <p className={classes.subtitle}>Гостиницы, отели, хостелы</p>
              </div>
            </div>
            <div className={`col-sm-12 col-3 ${classes.block} my-1  d-flex justify-content-center align-items-center`}>
              <div className={`${classes.fun}`}>
                <p>Где развлечься</p><br />
                <p className={classes.subtitle}>Парки, игры и т.д.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default WhereToGo
