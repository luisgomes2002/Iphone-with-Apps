import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import calculator from '../../assets/calculator.png'
import youtube from '../../assets/YouTube_iOS.webp'
import settings from '../../assets/settings.png'
import './Home.css'
import { useNavigate } from 'react-router-dom';

export const HomeItens = [
  {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  }, {
    id: 1,
    img: calculator,
    title: 'Calculator',
    link: '/calculator',
  },
  {
    id: 2,
    img: youtube,
    title: 'YouTube',
    link: '/youtube',
  },

]

export const shortcutsItens = [
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  },
  {
    id: 3,
    img: settings,
    title: 'Settings',
    link: '/',
  },
]

const Icons = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(-1)

  const handleClick = (id) => {
    setIsButtonClicked(id)
  }

  // const navigate = useNavigate()

  // useEffect(() => {
  //   const timeWait = 1000

  //   const redirect = () => {
  //     navigate()
  //   }

  //   const timeoutId = setTimeout(redirect, timeWait)
  //   return () => clearTimeout(timeoutId)
  // }, [navigate])

  return (
    <>
      {HomeItens.map((itens, id) => {
        return (
          <div className='apps-info' key={id}>
            <Link to={itens.link}>
              <button
                style={{ backgroundImage: `url(${itens.img})` }}
                className={isButtonClicked === id ? 'img-filter' : ''}
                onClick={() => {
                  handleClick(id)
                }}
              ></button>
            </Link>
            <p>{itens.title}</p>
          </div>
        )
      })}
    </>
  )
}

const ShortcutsIcons = () => {
  const [isButtonClicked, setIsButtonClicked] = useState(-1)

  const handleClick = (id) => {
    setIsButtonClicked(id)
  }

  return (
    <>
      {shortcutsItens.map((itens, id) => {
        return (
          <div className='apps-info' key={id}>
            <div className='centralize-apps'>
              <Link to={itens.link}>
                <button
                  style={{ backgroundImage: `url(${itens.img})` }}
                  className={isButtonClicked === id ? 'img-filter' : ''}
                  onClick={() => {
                    handleClick(id)
                  }}
                ></button>
              </Link>
            </div>

          </div>
        )
      })}
    </>
  )
}

//aumentar o tamanho da tela 

const AppIcons = () => {
  return (
    <div>
      <div className='app-show'>
        <Icons />
      </div>
      <div className='pagination'>
        <button>
          <i class="fa-solid fa-magnifying-glass"></i>
          <p>Search</p>
        </button>
      </div>
      <div className='shortcuts'>
        <ShortcutsIcons />
      </div>
    </div>
  )
}

export default AppIcons