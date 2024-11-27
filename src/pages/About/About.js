import React from 'react'
import './about.css'
import Header from '../../components/Header/Header'
import Pagebanner from '../../components/Pagebanner/Pagebanner'
import about from '../../assets/images/about/about.png'
import { Col, Container, Row } from 'react-bootstrap'

import ac1 from '../../assets/images/about/fe3.png'
import ac2 from '../../assets/images/about/fe2.png'
import ac3 from '../../assets/images/about/f2.webp'
import Footer from '../../components/Footer/Footer'

const About = () => {
    return (
        <>
            <Header />
            <Pagebanner name={"About Us"} />

            {/* About Content */}
            <section className='about-section my-5'>
                <Container>
                    <Row>
                        <Col md={7} xs={12}>
                            <div className='about-img'>
                                <img src={about} className='img-fluid' />
                                <h3 className='about-img-title my-3'>HOW WE ARE BEST FOR TRAVEL !</h3>
                                <p>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    <br />
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                </p>
                            </div>
                            
                        </Col>
                        <Col md={5} xs={12}>
                            <div className='about-cards my-5'>
                                <div className='card about-card'>
                                    <img src={ac1} className='img-fluid'/>
                                    <h3 className='card-title'>50+ Destination</h3>
                                    <p className='card-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className='about-cards my-5'>
                                <div className='card about-card'>
                                    <img src={ac2} className='img-fluid'/>
                                    <h3 className='card-title'>Best Price In The Industry</h3>
                                    <p className='card-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                            <div className='about-cards my-5'>
                                <div className='card about-card'>
                                    <img src={ac3} className='img-fluid'/>
                                    <h3 className='card-title'>Super Fast Booking                                    </h3>
                                    <p className='card-text'>
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <Footer/>
        </>

    )
}

export default About