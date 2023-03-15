import React from 'react'
import CardItem from './CardItem'
import './cards.css';

export default function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout these epic places!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src="../images/waterfall_girl.jpg" 
                    text='Explore the beautiful Amazonian waterfall!'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src="../images/island.jpg" 
                    text='Experience your own private island!'
                    label='Luxury'
                    path='/services'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem src="../images/img1.jpg" 
                    text='Dummy text goes here'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src="../images/img-2.pjg" 
                    text='Dummy text goes here'
                    label='Luxury'
                    path='/services'/>
                    <CardItem src="../images/img-3.pjg" 
                    text='Dummy text goes here'
                    label='Luxury'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}
