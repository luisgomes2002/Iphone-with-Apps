import React from 'react'
import { Routes, Route } from 'react-router-dom'
import AppIcons from './home/HomeItem'
import YouTube from './Youtube/Youtube'
import Calculator from './calculator/Calculator'
import YoutubeHome from './Youtube/YoutubeHome'

function Router() {
  return (
    <Routes>
      <Route exact path='/' element={<AppIcons />} />
      <Route path='/youtube' element={<YouTube />} />
      <Route path='/youtubePage' element={<YoutubeHome />} />
      <Route path='/calculator' element={<Calculator />} />
    </Routes>
  )
}

export default Router

