import React from 'react'
import classes from './Card.module.css'
import '../../../styles/grid.css'
import { ReactComponent as GPSIcon } from './images/location_pin.svg'

function Card(props) {
  const styles = 'col-3 col-sm-6 my-1 d-flex justify-content-center align-items-center'
  if (props.post.bored) {
    function setMonth(x) {
      switch (x) {
        case '01':
          return 'января'
        case '02':
          return 'февраля'
        case '03':
          return 'марта'
        case '04':
          return 'апреля'
        case '05':
          return 'мая'
        case '06':
          return 'июня'
        case '07':
          return 'июля'
        case '08':
          return 'августа'
        case '09':
          return 'сентября'
        case '10':
          return 'октября'
        case '11':
          return 'ноября'
        case '12':
          return 'декабря'
        default:
          return ''
      } 
    }
    const bor = props.post.bored
    let t = bor.split('-')
    t[1] = setMonth(t[1])
    if (props.post.died) {
      const die = props.post.died
      let t2 = die.split('-')
      t2[1] = setMonth(t2[1])
      return (
        <div className={styles}>
          <div className={classes.card}>
            <img src={`http://localhost:8000${props.post.image}`} className={classes.img}/>
            <div className={classes.cardinfo}>
              <h3>{props.post.title}</h3>
              <p>{parseInt(t[2], 10)} {t[1]} {t[0]} - {parseInt(t2[2], 10)} {t2[1]} {t2[0]}</p>
            </div>
          </div>
        </div>
      ) 
    } else {
      return (
        <div className={styles}>
          <div className={classes.card}>
            <img src={`http://localhost:8000${props.post.image}`} className={classes.img}/>
            <div className={classes.cardinfo}>
              <h3>{props.post.title}</h3>
              <p>{parseInt(t[2], 10)} {t[1]} {t[0]} г.</p>
            </div>
          </div>
        </div>
      ) 
    }
  } else {
    if (props.post.address) {
      return (
        <div className={styles}>
          <div className={classes.card}>
            <img src={`http://localhost:8000${props.post.image}`} className={classes.img}/>
            <div className={classes.gps}><GPSIcon /></div>
            <div className={classes.cardinfo}>
              <h3 className={classes.title}>{props.post.title}</h3>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className={styles}>
          <div className={classes.card}>
            <img src={`http://localhost:8000${props.post.image}`} className={classes.img}/>
            {/* <div className={classes.gps}><GPSIcon /></div> */}
            <div className={classes.category}>{props.post.category}</div>
            <div className={classes.cardinfo}>
              <h3 className={classes.title}>{props.post.title}</h3>
            </div>
          </div>
        </div>
      )
    }
  }
}

export default Card
