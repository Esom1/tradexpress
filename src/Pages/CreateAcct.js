import React from 'react'
import '../styles/CreateAcct.css'
import { Link } from 'react-router-dom'
import apple from '../assets/Group 119.png'
import play from '../assets/Group 120.png'



const CreateAcct = () => {
  return (
    <div className='base text-center'>
     <div  className='container'>
     <div className='text-base text-center pt-4'>
        <p className='top-1'>Ready to trade Buy/Sell cryptocurrencies in just 10 minutes?</p>
        <h3 className='top-2'>Create your account for free and start trading today!</h3>
      </div>
      <Link className='start mt-5 mb-4 login' to='/GetStarted'>Get Started</Link>
    <div className='link mt-4'>
      <img className='link1' src={apple} alt="apple button" />
      <img  className='link2' src={play} alt="playstore button" />
     </div>
     </div>
    </div>
  )
}

export default CreateAcct