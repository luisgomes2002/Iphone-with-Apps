import React from 'react'
import './Home.css'
import { useLocation } from 'react-router-dom'
import Router from '../Routes'

const HomeScreen = () => {
  const location = useLocation();
  const isYouTubePage = location.pathname === '/youtube';
  const isYouTubeHome = location.pathname === '/youtubePage';
  const isCalculatorPage = location.pathname === '/calculator';

  return (
    <div className='phone-case'>
      <div className={
        `phone-screen 
       ${isYouTubePage ? 'img-youtube' : ''}
       ${isYouTubeHome ? 'youtube-home ' : ''}
       ${isCalculatorPage ? 'calculator-screen' : ''}
       `}>
        <div className="up-area-itens">
          <h1>12:00</h1>

          <button className='dynamicIsland'>

          </button>

          <div className="utilities">
            <i className="fa-solid fa-signal"></i>
            <i className="fa-solid fa-battery-full"></i>
          </div>
        </div>

        <div className='apps' style={{ width: '90%' }}>
          <Router />
        </div>

      </div>
    </div >
  )
}

export default HomeScreen