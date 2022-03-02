import React from 'react'
import './Widgets.css'

import { FiberManualRecord, Info } from '@mui/icons-material'

function Widgets () {

  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__article-left">
        <FiberManualRecord />
      </div>
      <div className="widgets__article-right">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle("React redux course", "Sonny Sancha 9099 readers")}
      {newsArticle("Coravirus: UK updates", "Top news - 866 readers")}
      {newsArticle("Coravirus: UK updates", "Top news - 866 readers")}
      {newsArticle("Coravirus: UK updates", "Top news - 866 readers")}
      {newsArticle("Coravirus: UK updates", "Top news - 866 readers")}
      {newsArticle("Coravirus: UK updates", "Top news - 866 readers")}
    </div>
  )
}

export default Widgets