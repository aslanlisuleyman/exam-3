import React from 'react'
import "./Header.scss"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div className='head'>
        <Swiper navigation={true} modules={[Autoplay, Navigation]} className="mySwiper" autoplay={{
            delay:3500
        }}> 
        <SwiperSlide className='swi'>
            <div className='bas'>
                <div className='header'>
                    <div className='imh'>
                        <div><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /></div>
                        <h2> COURSE</h2>
                    </div>
                    <div>
                        <ul>
                         <Link className='link' to="/">Home</Link>
                         <Link className='link' to="/basket">Basket</Link>
                         <Link className='link' to="/wishlist">Wishlist</Link>
                         <Link className='link' to="/add">Add</Link>
                        
                        
                        
                        
                        </ul>
                        </div>
                        <div className='last'><p><i class="fa-solid fa-phone-volume"></i>+43 4566 7788 2457</p></div>
                   

                </div>
                       <div className='h2'>
                        <h2>Get your <span>Education</span> today! </h2>
                    </div>
                <div className='sect'>
                    <div className='ayri'>
                        <div><i class="fa-solid fa-earth-asia"></i></div>
                        <div><h3>Online Courses</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div > <i class="fa-solid fa-fire-burner"></i></div>
                        <div><h3>Our Library</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div><i class="fa-solid fa-user-graduate"></i></div>
                        <div><h3>Our Teachers</h3><p>VIEW MORE</p></div>
                    </div>
                </div>
                






            </div>
        </SwiperSlide>
        <SwiperSlide className='swi'>
        <div className='bas'>
                <div className='header'>
                    <div className='imh'>
                        <div><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /></div>
                        <h2> COURSE</h2>
                    </div>
                    <div>
                        <ul>
                         <Link className='link' to="/">Home</Link>
                         <Link className='link' to="/basket">Basket</Link>
                         <Link className='link' to="/wishlist">Wishlist</Link>
                         <Link className='link' to="/add">Add</Link>
                        
                        
                        
                        
                        </ul>
                        </div>
                        <div className='last'><p><i class="fa-solid fa-phone-volume"></i>+43 4566 7788 2457</p></div>
                   

                </div>
                       <div className='h2'>
                        <h2>Get your <span>Education</span> today! </h2>
                    </div>
                <div className='sect'>
                    <div className='ayri'>
                        <div><i class="fa-solid fa-earth-asia"></i></div>
                        <div><h3>Online Courses</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div><i class="fa-solid fa-fire-burner"></i></div>
                        <div><h3>Our Library</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div><i class="fa-solid fa-user-graduate"></i></div>
                        <div><h3>Our Teachers</h3><p>VIEW MORE</p></div>
                    </div>
                </div>
                






            </div>

        </SwiperSlide>
        <SwiperSlide className='swi'>
        <div className='bas'>
                <div className='header'>
                <div className='imh'>
                        <div><img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" /></div>
                        <h2> COURSE</h2>
                    </div>
                    <div>
                        <ul>
                         <Link className='link' to="/">Home</Link>
                         <Link className='link' to="/basket">Basket</Link>
                         <Link className='link' to="/wishlist">Wishlist</Link>
                         <Link className='link' to="/add">Add</Link>
                        
                        
                        
                        
                        </ul>
                        </div>
                        <div className='last'><p><i class="fa-solid fa-phone-volume"></i>+43 4566 7788 2457</p></div>
                   

                </div>
                       <div className='h2'>
                        <h2>Get your <span>Education</span> today! </h2>
                    </div>
                <div className='sect'>
                    <div className='ayri'>
                        <div><i class="fa-solid fa-earth-asia"></i></div>
                        <div><h3>Online Courses</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div><i class="fa-solid fa-fire-burner"></i></div>
                        <div><h3>Our Library</h3><p>VIEW MORE</p></div>
                    </div>
                    <div className='ayri'>
                    <div><i class="fa-solid fa-user-graduate"></i></div>
                        <div><h3>Our Teachers</h3><p>VIEW MORE</p></div>
                    </div>
                </div>
                






            </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Header