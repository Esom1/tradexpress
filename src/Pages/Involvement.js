import React from 'react'
import '../styles/Involvement.css'
import rafiki from '../assets/rafiki.png'
import freelance from '../assets/cuate.png'
import investment from '../assets/amico.png'
import Card from 'react-bootstrap/Card';


const Involvement = () => {
  return (
    <div className='involve'>
      <div className='container text-center pt-5'>
        <h3 className=''>Why do people get involved with Cryptocurrencies?</h3>
        <button className='less mt-4 mb-5'>See less</button>
        <div className='cards d-md-flex justify-content-between '>
       <div className='card1'>
       <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Body>
        <div>
          <img src={rafiki} alt="" />
        </div>
          <Card.Text>
          <div className='text1 text-center'>
          <h6>Easy Mode of Payment</h6>
           <p>People can now easily send and receive money from anywhere in the world to purchase goods and pay for services.</p>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>
       </div>
       <div className='card2'>
       <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Body>
        <div className='btwin'>
          <img src={freelance} alt="" />
        </div>
          <Card.Text>
          <div className='text2'>
          <h6>Financial Freedom</h6>
           <p>Just like the internet no single entity controls the Crypto network which provides users transparency and privacy, which puts you in absolute control of your money.</p>
          </div>
          </Card.Text>
        </Card.Body>
      </Card>
       </div>
       <div className='card3'>
       <Card border="secondary" style={{ width: '18rem' }}>
        <Card.Body>
        <div>
          <img src={investment} alt="" />
        </div>
          <Card.Text>
            <div className='text3'>
              <h6>Investment</h6>
              <p>The constant demand as made Cryptocurrecies a Digital Gold used for alternative store of wealth on long term investments.</p>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
       </div>
        </div>
      </div>
    </div>

  )
}

export default Involvement