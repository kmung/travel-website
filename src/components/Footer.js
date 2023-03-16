import React from 'react';
import { Link } from 'react-router-dom';
import {Button} from './Button';
import './footer.css';

function Footer() {
  return (
    <div className='footer-container'>
        <section className='footer-subscription'>
            <p className='footer-subscription-heading'>Join the Pirate King newsletter to receive our latest bottles!</p>
            <p className='footer-subscription-text'>You can do it too if you work hard like Luffy!</p>
            <div className='input-areas'>
                <form>
                    <input type='email' name='email' placeholder='Your email' className='footer-input' />
                    <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
        <div className='footer-link'>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>About Us</h2>
                    <Link to='/sign-up'>How it works</Link>
                    <Link to='/sign-up'>Testimonials</Link>
                    <Link to='/sign-up'>Career</Link>
                    <Link to='/sign-up'>People</Link>
                    <Link to='/sign-up'>Terms & Agreements</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Contact Us</h2>
                    <Link to='/'>Contact</Link>
                    <Link to='/'>Support</Link>
                    <Link to='/'>Destinations</Link>
                    <Link to='/'>Sponsorships</Link>
                </div>
            </div>
            <div className='footer-link-wrapper'>
                <div className='footer-link-items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer-link-items'>
                    <h2>Social Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
            </div>
        </div>
        <section className='social-media'>
            <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className='social-logo'>
                KHLZN <i className='fa-solid fa-person-hiking' />
                </Link>
            </div>
            <small className='website-rights'>KHLZN <i className="fa-regular fa-copyright"></i> 2020</small>
            <div className='social-icons'>
                <Link
                className='social-icon-link facebook'
                to='/'
                target='_blank'
                aria-label='Facebook'
                >
                <i className='fab fa-facebook-f' />
                </Link>
                <Link
                className='social-icon-link instagram'
                to='/'
                target='_blank'
                aria-label='Instagram'
                >
                <i className='fab fa-instagram' />
                </Link>
                <Link
                className='social-icon-link youtube'
                to='/'
                target='_blank'
                aria-label='Youtube'
                >
                <i className='fab fa-youtube' />
                </Link>
                <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='Twitter'
                >
                <i className='fab fa-twitter' />
                </Link>
                <Link
                className='social-icon-link twitter'
                to='/'
                target='_blank'
                aria-label='LinkedIn'
                >
                <i className='fab fa-linkedin' />
                </Link>
            </div>
            </div>
      </section>
    </div>
  )
}

export default Footer;