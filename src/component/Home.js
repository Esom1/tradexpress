import React from 'react';
import Hero from '../Pages/Hero';
import FetchBtc from '../Pages/FetchBtc';
import Involvement from '../Pages/Involvement';
import SimpleSteps from '../Pages/SimpleSteps';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <FetchBtc/>
      <Involvement/>
      <SimpleSteps/>
      
    </div>
  )
}

export default Home