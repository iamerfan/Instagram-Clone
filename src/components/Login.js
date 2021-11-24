import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import Phone from '../assets/Phone.png';
import { FloatingLabel, Form } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Login() {
   const [PasswordType, setPasswordType] = useState('Password');

   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   var settings = {
      dots: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
   };
   return (
      <div className='LoginContainer'>
         <Link to='/' className='btn btn-primary position-absolute w-100 bottom-0 rounded-0 '>
            Skip This Page And Go To Main Instagram Page
         </Link>
         {isD && (
            <div className='PhoneDiv'>
               <img src={Phone} alt='' />
               <Slider className='LoginCarousel' {...settings}>
                  <div>
                     <img src='/assets/Carousel/1.png' alt='' />
                  </div>
                  <div>
                     <img src='/assets/Carousel/2.png' alt='' />
                  </div>
                  <div>
                     <img src='/assets/Carousel/3.png' alt='' />
                  </div>
               </Slider>
            </div>
         )}
         <div className='d-flex gap-2 flex-column'>
            <div className='LoginDiv'>
               <img src={Logo} alt='' />
               <div className='LoginPanel'>
                  <FloatingLabel controlId='floatingInput' label='Email address' className='mb-3'>
                     <Form.Control type='email' placeholder='name@example.com' />
                  </FloatingLabel>
                  <FloatingLabel
                     className='LoginPasswordField'
                     controlId='floatingPassword'
                     label='Password'>
                     <Form.Control type={PasswordType} placeholder='Password' />
                     <button
                        onClick={() =>
                           PasswordType === 'Password'
                              ? setPasswordType('text')
                              : setPasswordType('Password')
                        }
                        className='btn btn-light LoginShow '>
                        {PasswordType === 'Password' ? 'Show' : 'Hide'}
                     </button>
                  </FloatingLabel>
                  <button className='btn btn-primary mt-3'>Log In</button>
               </div>
               Forgot password?
            </div>
            <div className='LSignupDiv'>
               <label>
                  Don't have an account?{' '}
                  <Link className='text-decoration-none' to='/Signup'>
                     Sign up
                  </Link>
               </label>
            </div>
         </div>
      </div>
   );
}
