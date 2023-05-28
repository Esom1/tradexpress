import React from 'react'
import '../styles/Hero.css'
import { Link } from 'react-router-dom'
import applebtn from '../assets/apple btn.png'
import playstore from '../assets/playstore btn (2).png'
import eclipsbig from '../assets/Ellipse 1.svg'
import eclipssmall from '../assets/Ellipse 1 (1).svg'

const Hero = () => {
  return (
      <div className=' hero-section text-white '>
     <div className='container '>
    <div className='highlight'>
    <h2>Buy, sell and manage your <br /> Crypto on TradExpress.</h2>
      <p>Easily Trade Cryptocurrencies like BTC, USDT, ETH, LTC <br /> & XRP with NGN.</p>
    </div>
    <Link className='start mt-5 mb-4 login1' to='/GetStarted'>Get Started</Link>
    <div className='link mt-4'>
      <img className='link1' src={applebtn} alt="apple button" />
      <img  className='link2' src={playstore} alt="playstore button" />
     </div>
     <div className='circle'>
      <img className='big' src={eclipsbig} alt="big circle" />
      <img className='small' src={eclipssmall} alt="small circle" />
     </div>
     </div>
    </div>
  )
}

export default Hero