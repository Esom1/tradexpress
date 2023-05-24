import React from 'react'
import '../styles/SimpleSteps.css'
import one from '../assets/one-icon.png'
import phone from '../assets/profile-pic.png'
import two from '../assets/two-icon.png'
import piggy from '../assets/pig-bank.png'
import three from '../assets/three-icon.png'
import coin from '../assets/BTC.png'

const SimpleSteps = () => {
  return (
    <div className='container'>
    <div className=' mb-5 buy-sell'>
    <h3 className='mb-4 buy'>Buy and Sell your Cryptocurrency in 3 simple steps</h3>
      <p className='sell'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lectus faucibus et nunc id sollicitudin pretium nulla. Et nunc tempus mauris ullamcorper mauris, rhoncus sed magna. Eu consectetur nulla aliquam consectetur lectus. Rutrum feugiat et, tellus mattis donec et odio molestie amet.</p>
    </div>
    <div>
    </div>
    <div className='general-1 d-md-flex mb-5'>
    <div className='first-flex d-md-flex gap-3 mt-5'>
    <div className='img-1'>
        <img src={one} alt="" />
      </div>
      <div className='icon-text-1'>
        <h6>Create a free Account</h6>
        <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
      </div>
    </div>
    <div className='vector-1'>
      <img src={phone} alt="" />
    </div>
    </div>
    <div className='general-2 mb-5'>
      <div className='second-flex d-md-flex gap-3 mt-5'>
        <div className='img-1'>
          <img src={two} alt="" />
        </div>
        <div className='icon-text-1'>
          <h6>Deposit</h6>
          <p>Choose your preferred deposit option like bank transfer, credit/debit card or send digital asset directly to your wallet for easy funding/withdrawal.</p>
        </div>
      </div>
      <div className='vector-2'>
        <img src={piggy} alt="" />
      </div>
    </div>
    <div className='general-3 d-md-flex mb-5'>
      <div className='third-flex  d-md-flex gap-3 mt-5'>
        <div className='img-1'>
          <img src={three} alt="" />
        </div>
        <div className='icon-text-1'>
          <h6>Buy/ Sell Crypto</h6>
          <p>Sign up for your free TradExpress Wallet on web, iOS, or Android devices and follow our easy process to set up your profile.</p>
        </div>
      </div>
      <div className='vector-3'>
        <img src={coin} alt="" />
      </div>
    </div>
    </div>
  )
}

export default SimpleSteps