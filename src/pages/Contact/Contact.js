import React from 'react'
import './contact.css'
import Header from '../../components/Header/Header'
import Pagebanner from '../../components/Pagebanner/Pagebanner'
import Footer from '../../components/Footer/Footer'
import { Container } from 'react-bootstrap'

const Contact = () => {
  return (
    <>
        <Header/>
        <Pagebanner name={"Contact"}/>

        {/* Contact Section */}
        <section className='contact-section my-5'>
            <Container>
                <div className='contact-header'>
                    <h3>Let's connect and know each other</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                </div>
                <div className='contact-cards my-5'>

                    <div className='contact-card'>
                        <i class="bi bi-headset"></i>
                        <h3>Call US</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <span><i class="bi bi-telephone"></i> +91 9597474684</span>
                    </div>

                    <div className='contact-card'>
                    <i class="bi bi-envelope"></i>
                        <h3>Email</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <span><i class="bi bi-link-45deg"></i> imkarvendhan@gmail.com</span>
                    </div>

                    <div className='contact-card'>
                    <i class="bi bi-globe2"></i>
                        <h3>Social media</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                        <span className='contact-sm-icons'>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-youtube"></i>
                        </span>
                    </div>
                </div>
            </Container>
        </section>

        <Footer/>
    </>
  )
}

export default Contact