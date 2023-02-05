import React from 'react'
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

function Widgets() {

    const newsArticle = (heading, subtitle) => (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>

            <div className="widgets__articleRight">
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
    )
  return (
    <div className="widgets">
        <div className="widgets__header">
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Russia targets key Ukrainian cities", "Top news - 1.5M readers")}
        {newsArticle("Google calls workers back to offices", "Top news - 11.2K readers")}
        {newsArticle("White House unveils pandemic reset", "Top news - 26.3K readers")}
        {newsArticle("How about 2 weeks off to start with?", "Top news - 61.5K readers")}
    </div>
  )
}

export default Widgets