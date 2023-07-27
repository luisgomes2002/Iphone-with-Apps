import React, { useEffect } from 'react'
import './Youtube.css'
import { useNavigate } from 'react-router-dom';

const YouTube = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timeWait = 1000

    const redirect = () => {
      navigate('/youtubePage')
    }

    const timeoutId = setTimeout(redirect, timeWait)
    return () => clearTimeout(timeoutId);

  }, [navigate])

  return (
    <></>
  )
}

export default YouTube