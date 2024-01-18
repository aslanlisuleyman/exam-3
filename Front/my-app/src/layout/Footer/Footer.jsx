import React from 'react'
import "./Footer.scss"
const Footer = () => {
  return (
    <div className='footer'>

 <div className='footer__left'>
        <div>
            <h1><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />COURSE</h1>
            <p>In aliquam, augue a gravida rutrum,<br /> ante nisl fermentum nulla, vitae <br /> tempor nisl ligula vel nunc. Proin quis <br /> mi malesuada, finibus tortor <br /> fermentum, tempor lacus.</p>
        </div>
        <div>
            <h3>Menu</h3>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Courses</li>
                <li>News</li>
                <li>Contact</li>
            </ul>
        </div>
        <div>
        <h3>Usefull Links</h3>
            <ul>
                <li>Testimonials</li>
                <li>FAQ</li>
                <li>Community</li>
                <li>Campus Pictures</li>
                <li>Tuitions</li>
            </ul>
        </div>
        <div className='h3'>
            <h3 >Contact</h3>
            <p><img className='img' src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="" />Blvd Libertad, 34 m05200 Arévalo</p>
            <p><img  className='img' src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="" />0034 37483 2445 322</p>
            <p><img  className='img' src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="" />hello@company.com</p>
        </div>
    </div>

       <div className='footer__right'>
        <div>
            <p>Copyright ©2024 All rights reserved | This template is made with <i class="fa-regular fa-heart"></i>  by <span>Colorlib</span></p>
        </div>
        <div className='icon'>
        <i class="fa-brands fa-pinterest"></i>
        <i class="fa-brands fa-linkedin-in"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-twitter"></i>
        </div>
       </div>

    </div>
   
  )
}

export default Footer