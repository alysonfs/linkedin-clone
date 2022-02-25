import { Avatar } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar () {

  const recentItem = (topic) => (
    <div className="sidebar__recent-item">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  )

  return (
    <div className='sidebar'>
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"
          alt="background degrade" />
        <Avatar className='sidebar__avatar' />
        <h2>Alyson Souza</h2>
        <h4>alysonfore@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who view you</p>
          <p className="sidebar__stat-number">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views you post</p>
          <p className="sidebar__stat-number">2,242</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("ReactJes")}
        {recentItem("Programing")}
        {recentItem("SoftwareEngineering")}
        {recentItem("Developer")}
      </div>
    </div>
  )
}

export default Sidebar