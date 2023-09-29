import React from 'react'
import Form from './Form';

const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer>
        <div className='footer'>
            <div className='news-form'>

            <div className='newsletter'>
                <h3>Newsletter</h3>
                <h4>Get news about articles and updates in your inbox.</h4>
            </div>
            <div className='form'>
                <Form />
            </div>
            </div>
            <div className='get-in-touch'>
                <h1>GET</h1>
                <h1>IN TOUCH</h1>
            </div>
        </div>
        <div className='copyright'>
            <h3>Copyright {currentYear} All Right Reserved By SG</h3>
        </div>
    </footer>
  )
}

export default Footer