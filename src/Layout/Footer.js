import React from 'react'
import { dataFooter } from '../FooterDb'
import '../styles/Footer.css'


const Footer = () => {
  return (
    <div className='footer mt-5'>
      <div className='container d-lg-flex justify-content-between align-items-center'>
      {dataFooter.map((datumFooter)=>{
          const { id,title,educate,reach,company,rights,last } = datumFooter
          return(
            <div className='footer-div'key={id}>
              <p> {title} </p>
              <ul className=' list-unstyled lh-lg'>
                <li>{educate}</li>
                <li>{reach}</li>
                <li>{company}</li>
                <li>{rights}</li>
                <li>{last}</li>
              </ul>
            </div>
          )
        })}

      </div>
      
    </div>
  )
}

export default Footer