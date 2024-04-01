import React from 'react'
import './Hero.css'
import Header from './header/Header'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="left-h">
            <Header />
       
        <div className="the-best-ad">
            <div></div>
            <span>The best fitness club in town</span>
        </div>
        </div>
        <div className="right-h"></div>

    </div>
  )
}

export default Hero