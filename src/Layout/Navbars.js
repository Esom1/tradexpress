import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../assets/TradExpress.png'
import '../styles/Navbar.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Navbars = () => {
  return (
    <div className='brand sticky-top'>
      <Navbar bg="" expand="lg" className=''>
      <Container className=''>
      <Link to='/'> <img className='mb-1 mt-3' src={navlogo} alt="nav-brand" /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end '>
          <Nav
            className="gap-4"
            // style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link className='text-decoration-none text-white mt-3 mb-1 one' to='/BuySell'>Instant Buy/Sell</Link>
            <Link className='text-decoration-none text-white mt-3 mb-1 two' to='/Learn'>Learn</Link>
            <Link className='log mt-3 mb-1' to='/Login'> Login</Link>
            <Link className='start mt-3 mb-1' to='/GetStarted'>Get Started</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     
    </div>
  )
}

export default Navbars