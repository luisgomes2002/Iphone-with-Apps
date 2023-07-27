import React from 'react'
import './YoutubeHome.css'
import { Link } from 'react-router-dom'


const YoutubeHome = () => {
  return (
    <div className="youtube-home">

      <div className='back-bnt'>
        <Link to='/'><button></button></Link>
      </div>
    </div>
  )
}

export default YoutubeHome