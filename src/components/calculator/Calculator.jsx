import React from 'react'
import './Calculator.css'
import { Link } from 'react-router-dom'

const Calculator = () => {
  return (
    <div className='calculator-screen'>
      <div className='back-bnt'>
        <Link to='/'><button></button></Link>
      </div>
    </div>
  )
}

export default Calculator