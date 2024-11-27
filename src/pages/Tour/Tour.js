import React from 'react'
import Header from '../../components/Header/Header'
import Pagebanner from '../../components/Pagebanner/Pagebanner'
import { Col, Container, Row } from 'react-bootstrap'
import Accordion from 'react-bootstrap/Accordion';
import './tour.css'
import Popular from '../../components/PopularPlaces/Popular';

const Tour = () => {
    return (
        <>
            <Header />
            <Pagebanner name={"Tours"} />

           <section className='tour-section my-5'>
           <Container>
                <Row>
                    <Col md={3} xs={12} className='mb-5'>

                        <Accordion defaultActiveKey="0">

                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Location</Accordion.Header>
                                <Accordion.Body>
                                    <div className='acc-location'>
                                        <div className='acc-location-input my-3'>
                                            <input type='checkbox' id='Tokyo'/> &nbsp;
                                            <label for='Tokyo'>Tokyo</label>
                                        </div>
                                        <div className='acc-location-input my-3'>
                                            <input type='checkbox' id='Singapore'/> &nbsp;
                                            <label for='Singapore'>Singapore</label>
                                        </div>
                                        <div className='acc-location-input my-3'>
                                            <input type='checkbox' id='Bangkok'/> &nbsp;
                                            <label for='Bangkok'>Bangkok</label>
                                        </div>
                                        <div className='acc-location-input my-3'>
                                            <input type='checkbox' id='Bali'/> &nbsp;
                                            <label for='Bali'>Bali</label>
                                        </div>
                                        <div className='acc-location-input my-3'>
                                            <input type='checkbox' id='Spain'/> &nbsp;
                                            <label for='Spain'>Spain</label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Categories</Accordion.Header>
                                <Accordion.Body>
                                <div className='acc-cat'>
                                        <div className='acc-cat-input my-3'>
                                            <input type='checkbox' id='History'/> &nbsp;
                                            <label for='History'>History</label>
                                        </div>
                                        <div className='acc-cat-input my-3'>
                                            <input type='checkbox' id='Urban'/> &nbsp;
                                            <label for='Urban'>Urban Tour</label>
                                        </div>
                                        <div className='acc-cat-input my-3'>
                                            <input type='checkbox' id='Culture'/> &nbsp;
                                            <label for='Culture'>Culture</label>
                                        </div>
                                        <div className='acc-cat-input my-3'>
                                            <input type='checkbox' id='Relax'/> &nbsp;
                                            <label for='Relax'>Relax</label>
                                        </div>
                                    </div>    
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Duration</Accordion.Header>
                                <Accordion.Body>
                                <div className='acc-duration'>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='one'/> &nbsp;
                                            <label for='one'>1-3 Days</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='two'/> &nbsp;
                                            <label for='two'>3-5 Days</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='three'/> &nbsp;
                                            <label for='three'>5-7 Days</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='four'/> &nbsp;
                                            <label for='four'>7-10 Days</label>
                                        </div>
                                    </div> 
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="3">
                                <Accordion.Header>Price</Accordion.Header>
                                <Accordion.Body>
                                <div className='acc-duration'>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='p-one'/> &nbsp;
                                            <label for='p-one'>₹ 500 - ₹ 1000</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='p-two'/> &nbsp;
                                            <label for='p-two'>₹ 1000 - ₹ 2000</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='p-three'/> &nbsp;
                                            <label for='p-three'>₹ 2000 - ₹ 5000</label>
                                        </div>
                                        <div className='acc-duration-input my-3'>
                                            <input type='checkbox' id='p-four'/> &nbsp;
                                            <label for='p-four'>₹ 5000 - ₹ 10000</label>
                                        </div>
                                    </div> 
                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>

                    </Col>
                    <Col md={9} xs={12}>
                        <Popular title={"Tour Places"}/>
                    </Col>
                </Row>
            </Container>
           </section>
        </>
    )
}

export default Tour