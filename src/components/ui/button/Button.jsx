import React from 'react'
import clasess from './Button.module.css'

function Button({type, ...props}) {
  if (type == 'outline') {
    return (
      <div className={clasess.outline} type={type} {...props}>
        {props.children}
      </div>
    )
  }
  else {
    return (
      <div className={clasess.default} type={type} {...props}>
        {props.children}
      </div>
    )
  }
}

export default Button