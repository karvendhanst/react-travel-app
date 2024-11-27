import React from 'react'
import Banner from '../../components/Banner/Banner'
import AdvanceSearch from '../../components/AdvanceSearch/AdvanceSearch'
import Features from '../../components/Features/Features'
import '../Home/home.css'

import t1 from '../../assets/images/tours/t1.png'
import t2 from '../../assets/images/tours/t2.png'
import t3 from '../../assets/images/tours/t3.png'
import t5 from '../../assets/images/tours/t5.png'
import Slider from "react-slick";
import { Col, Container, Row } from 'react-bootstrap'
import Popular from '../../components/PopularPlaces/Popular'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const Home = () => {

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 995,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  };

  const tours = [
    {
      img: t1,
      name: "tokyo",
      activity: "4 tours and activities"
    },
    {
      img: t2,
      name: "paris",
      activity: "4 tours and activities"
    },
    {
      img: t3,
      name: "malaysia",
      activity: "4 tours and activities"
    },
    {
      img: t5,
      name: "bangkok",
      activity: "4 tours and activities"
    }
  ]

  return (
    <>
      <Header/>
      <Banner />
      <AdvanceSearch />
      <Features />

      {/* Tours Section Image Slider */}

      <section className='tour-slider my-5'>
        <Container>
          <h3 className='tour-title mb-5'>Top Destination For Your Next Vacation</h3>
          <Slider {...settings}>
            {tours.map((item) => {
              return (
                <div className='tour-card'>
                  <img src={item.img} />
                  <span>{item.activity}</span>
                </div>
              )
            })}
          </Slider>
        </Container>
      </section>

      <Popular title={"Popular Activities"}/>

      {/* Contact Banner */}
      <section className='home-contact my-5'>
        <Container>
         <Row>
          <Col md={7} xs={12}>
            <div className='home-contact-content'>
                <span>Call To Action</span>
                <h1>
                LIFE IS SHORT AND THE <br/> WORLD IS WIDE
                </h1>
                <p>A journey of a thousand miles begins with a single step. Adventure is worthwhile</p>
            </div>
          </Col>
          <Col md={5} xs={12}>
            <button className='btn mt-4'>Contact us!</button>
          </Col>
         </Row>
        </Container>
      </section>

      <Footer/>

    </>
  )
}

export default Home