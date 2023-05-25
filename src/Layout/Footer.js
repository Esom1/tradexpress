import React from 'react'
import { dataFooter } from '../FooterDb'


const Footer = () => {
  return (
    <div className='footer mt-5'>
      <div className='container d-lg-flex justify-content-between align-items-center'>
      {dataFooter.map((datumFooter)=>{
          const { id,title,educate,reach,company,rights,last } = datumFooter
          return(
            <div className='fs-small footer-div'key={id}>
              <h2> {title} </h2>
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