import { useState } from 'react'
import { ProjectBrief, DayBreakdown } from './AboutusComponents'

const Aboutus = () => {

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <div id='aboutus-page'>
      <h1 id='aboutus-header'>Seeded - General Assembly Project 3</h1>
    <div id='aboutus-wrapper'>
      <ProjectBrief />
      <DayBreakdown />
    </div>
    </div>



    // <>
    //   <h1 id='aboutus-header'>Seeded - General Assembly Project 3</h1>
    //   <div id='aboutus-wrapper'>
    //     <div id='aboutus-btn'>
    //       <button value='ProjectBrief' onClick={handleClick}>Project Brief</button>
    //       <button value='DayBreakdown' onClick={handleClick}>Daily Breakdown</button>
    //     </div>
    //     <div id='aboutus-right'>
    //     {sectionDisplay()}
    //     </div>
    //   </div>
    //   <div id='credits'>
    //     <h5>Links to Team Members:</h5>
    //     <a target='_blank' rel='noreferrer' href='https://github.com/jackbdr'>Jack Robinson</a>
    //     <a target='_blank' rel='noreferrer' href='https://github.com/jdkuligowski'>James Kuligowski</a>
    //     <a target='_blank' rel='noreferrer' href='https://github.com/robertwmorgan'>Robert Morgan</a>
    //   </div>
    // </>
  )
}

export default Aboutus