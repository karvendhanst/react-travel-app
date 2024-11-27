import React from 'react'
import '../Footer/footer.css'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>

        <Container>

        <div className='footer-top'>
        <ul>
            <h3>Company</h3>
            <li>About us</li>
            <li>News</li>
            <li>FAQ</li>
        </ul>
        <ul>
            <h3>Explore</h3>
            <li>Tour  Listing</li>
            <li>Destination</li>
        </ul>
        <ul>
            <h3>Quick Links</h3>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
        </ul>
        <ul>
            <h3>Contact Info</h3>
            <li><i class="bi bi-geo-alt"></i> Namakkal, Tamilnadu</li>
            <li><i class="bi bi-envelope"></i> imkarvendhan@gmail.com</li>
            <li><i class="bi bi-telephone"></i> +91 9597474684</li>
        </ul>
        </div>

        <div className='footer-bottom'>
            <p>Karvendhan All rights reserved</p>
            <a href="https://github.com/karvendhanst" target='_blank'>
                <i class="bi bi-github"></i>
            </a>
        </div>

        </Container>

    </footer>
  )
}

export default Footer