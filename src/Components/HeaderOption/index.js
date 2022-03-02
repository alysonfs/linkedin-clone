import React from 'react'
import "./HeaderOption.css"
import { Avatar } from '@mui/material'

function HeaderOption ({ avatar, Icon, title, onClick }) {
  return (
    <div className='header-option' onClick={onClick}>
      {Icon && <Icon className="header-option__icon"/>}
      {avatar && (
        <Avatar className="header-option__icon" src={avatar}/>
      )}
      <h3 className='header-option__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption