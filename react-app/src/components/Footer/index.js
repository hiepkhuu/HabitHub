import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


const Footer = () => {

  return (
    <footer className="footer">
      <div className='feature-container'>
          <div className='footer-icon'></div>
          <div className='feature-links'>
              <Link className='footer-link' to='/login'>Login</Link>
              <Link className='footer-link' to='/signup'>Signup</Link>
              <Link></Link>
          </div>
      </div>
      <div className='font-awesome'>

      </div>
      <div className='developer-info'>
          <h2>Developed By:</h2>
          <a className='footer-link' to='/'>Hiep Khuu</a>
          <a className='footer-link' to='https://www.aedin.com/in/hiep-khuu-380111201/'> <span></span>LinkedIn</a>
          <a className='footer-link' to='https://github.com/hiepkhuu'><span></span>Github</a>
      </div>
    </footer>
  )
}


export default Footer
