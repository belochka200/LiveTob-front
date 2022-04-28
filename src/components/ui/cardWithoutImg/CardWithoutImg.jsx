import React from 'react'
import classes from './CardWithoutImg.module.css'
import '../../../styles/grid.css'

function CardWithoutImg(props) {
  return (
    <div className="col-4 col-sm-12 h-100">
      <div className={classes.card}>
        <p>{props.post.text}</p>
      </div>
    </div>
  )
}

export default CardWithoutImg
