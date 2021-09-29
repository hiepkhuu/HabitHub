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
              <Link className='footer-link' to='/sign-up'>Signup</Link>
              <Link></Link>
          </div>
      </div>
      <div className='developer-info'>
          <h3>DEVELOPED BY:</h3>
          <a className='developer-name'>Hiep Khuu</a>
          <div>
            <a className='footer-link' href='https://www.aedin.com/in/hiep-khuu-380111201/'> <i class="fab fa-linkedin-in"></i></a>
            <a className='footer-link' href='https://github.com/hiepkhuu'><i class="fab fa-github"></i></a>
          </div>
      </div>
      <div className='font-awesome'>
        Icons Mady By <a className='footer-link awesome' href='https://fontawesome.com/'>Font Awesome</a>
      </div>

    </footer>
  )
}


export default Footer
