import React from 'react';
import Hero from '../Pages/Hero';
import FetchBtc from '../Pages/FetchBtc';
import Involvement from '../Pages/Involvement';
import SimpleSteps from '../Pages/SimpleSteps';
import CreateAcct from '../Pages/CreateAcct';

const Home = () => {
  return (
    <div className=''>
      <Hero/>
      <FetchBtc/>
      <Involvement/>
      <SimpleSteps/>
      <CreateAcct/>
      
    </div>
  )
}

export default Home