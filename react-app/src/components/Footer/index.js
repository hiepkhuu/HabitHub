import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


const Footer = () => {

  return (
    <div className="footer">
      <Link className='footer-link' to='/'>By: Hiep Khuu</Link>
      <Link className='footer-link' to='https://www.linkedin.com/in/hiep-khuu-380111201/'>linkedin</Link>
      <Link className='footer-link' to='https://github.com/hiepkhuu'>Github</Link>
    </div>
  )
}


export default Footer
