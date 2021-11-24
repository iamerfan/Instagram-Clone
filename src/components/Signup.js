import React from 'react';
import Logo from '../assets/logo.png';

import { FloatingLabel, Form } from 'react-bootstrap';

import { useMediaQuery } from 'react-responsive';

import { Link } from 'react-router-dom';

export default function Signup() {
   return (
      <div className='SignUpContainer'>
         <div className='SignUpPanel'>
            <div className='SignupDiv'>
               <img src={Logo} alt='' />
               <p className='opacity-75 fw-bold'>
                  Sign up to see photos and videos from your friends.
               </p>
               <FloatingLabel
                  controlId='floatingInput'
                  label='Moblie Number Or Email'
                  className='mb-3'>
                  <Form.Control
                     type='text'
                     placeholder='Moblie Number Or Email'
                  />
               </FloatingLabel>

               <FloatingLabel
                  controlId='floatingInput'
                  label='Full Name'
                  className='mb-3'>
                  <Form.Control type='email' placeholder='Full Name' />
               </FloatingLabel>

               <FloatingLabel
                  controlId='floatingInput'
                  label='Username'
                  className='mb-3'>
                  <Form.Control type='email' placeholder='Username' />
               </FloatingLabel>

               <FloatingLabel
                  controlId='floatingInput'
                  label='Password'
                  className='mb-3'>
                  <Form.Control type='email' placeholder='Password' />
               </FloatingLabel>
               <button disabled className='w-100 btn btn-primary'>
                  Sign up
               </button>
               <p className='rules'>
                  By signing up, you agree to our Terms , Data Policy and
                  Cookies Policy .
               </p>
            </div>
            <div className='HaveAnAccountDiv'>
               <label>
                  Have an account?{' '}
                  <Link to='/Login' className='text-decoration-none'>
                     Log in
                  </Link>
               </label>
            </div>
            <div className='GetApp'>
               Get the app.
               <div>
                  <img width='136' src='/assets/appStore.png' alt='' />
                  <img width='136' src='/assets/GooglePlay.png' alt='' />
               </div>
            </div>
         </div>
      </div>
   );
}
