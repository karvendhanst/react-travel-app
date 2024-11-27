import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import c2 from '../../assets/images/carousel/cn1.jpg';
import '../Banner/banner.css';

const Banner = () => {
  return (
    
    <>
    
    <Carousel>
      <Carousel.Item>
        <img src={c2} alt='First Slide'/>
        <Carousel.Caption>
          <h3>ADVENTURE IS WORTHWHILE</h3>
          <p>A journey of a thousand miles begins with a single step. Plan Your Next Adventure</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={c2} alt='Second Slide'/>
        <Carousel.Caption>
          <h3>TO TRAVEL IS TO LIVE</h3>
          <p>A journey of a thousand miles begins with a single step. Plan Your Next Adventure</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    
    </>
  )
}

export default Banner