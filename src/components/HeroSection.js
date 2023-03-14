import React from 'react'
import { Button } from './Button'
import './herosection.css';

export default function HeroSection() {
  return (
    <div className='hero-container'>
        <video src='../videos/footage-12127.mp4' autoPlay loop muted />
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?.</p>
        <div className='hero-btns'>
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Get Started</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>Watch <i className='far fa-play-circle'/></Button>
        </div>
    </div>
  )
}
