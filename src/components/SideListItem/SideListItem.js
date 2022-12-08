import React from 'react'
import { Link } from 'react-router-dom'
import Style from './SideListItem.module.scss'
const SideListItem = ({id, src, title}) => {
  return (
    <Link className={Style.item} to={{search: `?v=${id}`}}>
      <img src={src} alt={title} />
      <div className={Style.info} >
        <span>{title}</span>
      </div>
    </Link>
  )
}

export default SideListItem
