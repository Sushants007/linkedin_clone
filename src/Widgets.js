
import { FiberManualRecord, Info } from '@mui/icons-material'
import React from 'react'
import "./Widgets.css"




function Widgets() {

  const newsArticle = (heading, Subtitle)=>
    (<div className='widgets__article'>
          <div className='widget__articleLeft'>
            <FiberManualRecord />

            
          </div>

          <div className='widget__articleRight'>
            <h4>{heading}</h4>
            <p>{Subtitle}</p>
          </div>

    </div>)

  return (
    <div className='widgets'>
        <div className='widgets__header'>
        <h2>Linkedin News</h2>
        <Info/>
    </div>
    {newsArticle("Top G is back","Top news - 9087 readers")}
    {newsArticle("Recession in IT sector","Top news - 889 readers")}
    {newsArticle("Tesla hits new height","Top news - 308 readers")} 
    {newsArticle("Botcoin Breaks $20k","Top news - 124 readers")}
    {newsArticle("Sushant got a job","Top news - 12 readers")}

    </div>
    
  )
}
export default Widgets;