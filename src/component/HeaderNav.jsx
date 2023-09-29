import React from 'react'
import freedelivery from '../assets/freedel.png'
import fbImg from '../assets/fb.png'
import instaImg from '../assets/insta.png'
import linkdinImg from '../assets/linkdin.png'
import twitterImg from '../assets/twitter.png'

const HeaderNav = () => {
  return (
      <div className='header-nav'>
          <div className='left-head'>
              <h3 className='delivery'><span><img src={freedelivery} /></span><span>Free Delivery</span></h3>
              <hr />
              <h3 className='return'>Return Policy</h3> 
          </div>
          <div className='right-head'>
              <div className='login-btn'>
                  <a href='#login'>Login</a>
              </div>
              <div className='social-icons'>
                  <h3>Follow Us</h3>
                  <a href='#facebook'><img src={fbImg} /></a>
                  <a href='#linkdin'><img src={linkdinImg} /></a>
                  <a href='#twitter'><img src={twitterImg} /></a>
                  <a href='#insta'><img src={instaImg} /></a>
              </div>
          </div>
    </div>
  )
}

export default HeaderNav