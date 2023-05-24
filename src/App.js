import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbars from './Layout/Navbars'
import Footer from './Layout/Footer';
import Home from './component/Home';
import BuySell from './component/BuySell';
import Learn from './component/Learn';
import Login from './component/Login';
import GetStarted from './component/GetStarted';


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbars/>
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/Instant Buy/Sell' element={<BuySell/>}/> 
      <Route path='/Learn' element={<Learn/>}/> 
      <Route path='/Login' element={<Login/>}/> 
      <Route path='/Get Started' element={<GetStarted/>}/> 
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
