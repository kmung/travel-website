import React from 'react';
import { Button } from './Button';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>Join the Pirate King newsletter to receive our latest bottles!</p>
            <p className='footer-subscription-text'>You can do it too if you work hard like Luffy!</p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input'>
                        <Button buttonStyle='btn--outline'>Subscribe</Button>
                    </input>
                </form>
            </div>
        </section>
    </div>
  )
}

export default Footer;