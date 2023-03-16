import React from 'react'
import CardItem from './CardItem'
import './cards.css';
import waterfallImg from '../images/waterfall_girl.jpg';
import islandImg from '../images/island.jpg';
import img1 from '../images/img-1.jpg';
import img2 from '../images/img-2.jpg';
import img3 from '../images/img-3.jpg';

export default function Cards() {
  return (
    <div className='cards'>
        <h1>Checkout these epic places!</h1>
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items'>
                    <CardItem src={waterfallImg} 
                    text='Explore the beautiful Amazonian waterfall!'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src={islandImg}
                    text='Experience your own private island!'
                    label='Luxury'
                    path='/services'/>
                </ul>
                <ul className='cards__items'>
                    <CardItem src={img1}
                    text='Dummy text goes here'
                    label='Adventure'
                    path='/services'/>
                    <CardItem src={img2} 
                    text='Dummy text goes here'
                    label='Luxury'
                    path='/services'/>
                    <CardItem src={img3} 
                    text='Dummy text goes here'
                    label='Luxury'
                    path='/services'/>
                </ul>
            </div>
        </div>
    </div>
  )
}
