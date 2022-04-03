import React from 'react'
import classes from './CardWithoutImg.module.css'
import '../../../styles/grid.css'

function CardWithoutImg(props) {
  return (
    <div className="col-4 col-sm-12 d-flex justify-content-center align-items-center">
      <div className={classes.card}>
        <p>{props.post.text}</p>
      </div>
    </div>
  )
}

export default CardWithoutImg
