import React from 'react'
import { classNames as cns } from '../lib/renderUtils'
import style from './RatioImageView.css'

const RatioImageView = ({ className, url, children }) => {
  return (
    <div className={cns(style.img, className)} style={{backgroundImage: `url(${url})`}}>
      {children}
    </div>
  )
}

export default RatioImageView
