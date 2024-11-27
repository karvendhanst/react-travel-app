import React from 'react'
import f1 from '../../assets/images/features/fe2.png'
import f2 from '../../assets/images/features/fe1.webp'
import f3 from '../../assets/images/features/fe4.webp'
import f4 from '../../assets/images/features/fe3.png'
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import '../Features/features.css'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Features = () => {

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true
            }
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          }
        ]
      };

    const featureList = [
        {
            id: 1,
            image: f2,
            title: "Dicover the possibilities",
            des: "Lorem Ipsum is simply dummy text of the printing"
        },
        {
            id: 2,
            image: f3,
            title: "Enjoy deals & delights",
            des: "Lorem Ipsum is simply dummy text of the printing"
        },
        {
            id: 3,
            image: f4,
            title: "Exploring made easy",
            des: "Lorem Ipsum is simply dummy text of the printing"
        },
        {
            id: 4,
            image: f1,
            title: "Travel you can trust",
            des: "Lorem Ipsum is simply dummy text of the printing"
        }
    ]
    return (
        <Container>

            <section className='feature-section'>
                <ul className='feature-cards me-4'>
                <Slider {...settings}>
                    {featureList.map((item) => {
                        return (
                            <Card key={item.id}>
                                <Card.Img variant="top" src={item.image} />
                                <Card.Body>
                                    <Card.Title>{item.title}</Card.Title>
                                    <Card.Text>
                                        {item.des}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        )
                    })}
                    </Slider>
                </ul>
            </section>

        </Container>
    )
}

export default Features