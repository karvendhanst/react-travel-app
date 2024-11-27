import React from 'react'
import '../PopularPlaces/popular.css'
import Card from 'react-bootstrap/Card';

import p1 from '../../assets/images/popular/Anchorage To La Paz.jpg'
import p2 from '../../assets/images/popular/Anchorage To Quito.jpg'
import p3 from '../../assets/images/popular/Anchorage To Santiago.jpg'
import p4 from '../../assets/images/popular/Anchorage To Ushuaia.jpg'
import p5 from '../../assets/images/popular/Cuzco To Anchorage.jpg'
import p6 from '../../assets/images/popular/Discover Singapore.png'
import p7 from '../../assets/images/popular/Kiwiana Panorama.jpg'
import p8 from '../../assets/images/popular/LA Explorer.jpg'
import { Col, Container, Row } from 'react-bootstrap'

const Popular = (props) => {

    const popularsData = [
        {
            id: 0,
            title: "Discover OOTY",
            image: p1,
            location: "Ooty, Tamilnadu, India",
            category: ["Hills", "River"],
            days: "5 days - 4 nights",
            price: 2500,
            rating: 3,
            reviews: 5,
        },
        {
            id: 1,
            title: "Pykara Falls",
            image: p2,
            location: "Ooty, Tamilnadu, India",
            category: ["River", "Wildlife"],
            days: "2 days - 1 nights",
            price: 2500,
            rating: 4,
            reviews: 9,
        },
        {
            id: 2,
            title: "Kolli Hills",
            image: p3,
            location: "Namakkal, Tamilnadu, India",
            category: ["Hills", "River"],
            days: "2 days - 1 nights",
            price: 800,
            rating: 4,
            reviews: 9,
        },
        {
            id: 3,
            title: "Yercad",
            image: p4,
            location: "Salem, Tamilnadu, India",
            category: ["Hills", "Forest"],
            days: "unlimited",
            price: 950,
            rating: 5,
            reviews: 20,
        },
        {
            id: 4,
            title: "Kodaikanal",
            image: p5,
            location: "Kodaikanal, Tamilnadu, India",
            category: ["River", "Hills"],
            days: "1 days - 9 hours",
            price: 2200,
            rating: 3,
            reviews: 12,
        },
        {
            id: 5,
            title: "Budda Temple",
            image: p6,
            location: "Chennai, Tamilnadu, India",
            category: ["Temple", "Travel"],
            days: "5 days - 4 nights",
            price: 1800,
            rating: 3,
            reviews: 12,
        },
        {
            id: 6,
            title: "Marina Beach",
            image: p7,
            location: "Chennai, Tamilnadu, India",
            category: ["Beach", "Travel"],
            days: "1 day - 1 night",
            price: 1800,
            rating: 5,
            reviews: 18,
        },
        {
            id: 7,
            title: "Wonderla",
            image: p8,
            location: "Mettupalayam, Tamilnadu, India",
            category: ["Play", "Falls"],
            days: "1 night",
            price: 2200,
            rating: 4,
            reviews: 22,
        },
    ];

    return (
        <section className='popular-section'>
            <Container>
                <h3 className='popular-title'>{props.title}</h3>
                <div className='popular-cards'>
                        {
                           
                            popularsData.map((item) => {
                                return(
                                    <Card style={{width: "16em"}}>
                                    <Card.Img variant="top" src={item.image} />
                                    <Card.Body>
                                        <span className='pcard-location'><i class="bi bi-geo-alt"></i> {item.location}</span>
                                        <Card.Title>{item.title}</Card.Title>
                                        <p className='pcard-review'>
                                            <i class="bi bi-star-fill"></i> {item.rating} ( {item.reviews} reviews )
                                        </p>
                                        <div className='pcard-cat'>
                                            <p className={item.category[0]}>{item.category[0]}</p>
                                            <p className={item.category[1]}>{item.category[1]}</p>
                                        </div>
                                    </Card.Body>

                                    <Card.Footer>
                                        <p className='pcard-price'>From ₹ {item.price}</p>
                                        <p className='pcard-days'>
                                            <i class="bi bi-clock"></i> &nbsp;
                                            {item.days}
                                        </p>
                                    </Card.Footer>
                                </Card>
                                )
                            })
                        
                        }
                    </div>
            </Container>
        </section>
    )
}

export default Popular