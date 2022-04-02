import React from 'react'
import classes from './CardWithoutImg.module.css'
import '../../../styles/grid.css'

function CardWithoutImg(props) {
  return (
    <div className="col-4 col-sm-12 my-1 d-flex justify-content-center align-items-center">
      <div className={classes.card}>
        <h3>{props.post.text}</h3>
      </div>
    </div>
  )
}

export default CardWithoutImg
