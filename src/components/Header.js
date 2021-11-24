import React, { useEffect, useRef, useState } from 'react';
import Logo from '../assets/logo.png';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Modal, Button, Dropdown, OverlayTrigger, Popover } from 'react-bootstrap';
import AddImg from '../assets/Add.png';
import myProfileImg from '../assets/myProfile.jpg';
import * as Icon from 'react-icons/io5';
import { CgAddR, CgProfile } from 'react-icons/cg';
import SearchPanel from './SearchPanel';

export default function Header() {
   let location = useLocation();

   useEffect(() => {
      setPath(location.pathname);
   }, [location]);

   const inputFile = useRef();
   const [show, setShow] = useState(false);
   const [path, setPath] = useState();
   const [searchP, setSearchP] = useState(false);
   const [activity, setActivity] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const handleXbtn = value => setSearchP(value);

   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   return (
      <div className='Header sticky-top'>
         <Link to='/'>
            <img src={Logo} alt='' className={isD ? 'Logo' : 'LogoSmall'} />
         </Link>

         {isD && (
            <div className='SearchBar'>
               <Icon.IoSearch />
               <input onFocus={() => setSearchP(true)} placeholder='Search' type='text' />
               {searchP ? <SearchPanel hide={handleXbtn} /> : ''}
            </div>
         )}

         <div
            className={
               isD
                  ? 'Icons justify-content-end justify-content-lg-start'
                  : 'IconsSmall justify-content-end justify-content-lg-start'
            }>
            <NavLink exact className='link-dark mb-1' to='/'>
               {path === '/' ? <Icon.IoHomeSharp /> : <Icon.IoHomeOutline />}
            </NavLink>

            <NavLink exact className='link-dark mb-1' to='/Direct'>
               {path === '/Direct' ? (
                  <Icon.IoSend className='Rotate45 fs-4 mb-1' />
               ) : (
                  <Icon.IoPaperPlaneOutline />
               )}
            </NavLink>
            <CgAddR className='CursorP' onClick={handleShow} />

            <NavLink exact className='link-dark mb-1' to='/Explore'>
               {path === '/Explore' ? <Icon.IoCompass /> : <Icon.IoCompassOutline />}
            </NavLink>

            <OverlayTrigger
               trigger='click'
               rootClose
               placement='bottom'
               onToggle={() => setActivity(false)}
               onEnter={() => setActivity(true)}
               overlay={
                  <Popover hideArrow={true} id='popover-trigger-click-root-close'>
                     <div className='ActivityPanel' onBlur={() => setActivity(false)}>
                        <i className='border border-dark rounded-circle p-3'>
                           <Icon.IoHeartOutline className='fs-1 ' />
                        </i>
                        <label>Activity On Your Posts</label>
                        <p>
                           When Someone likes or comments on one of your posts, you'll see it here
                        </p>
                     </div>
                  </Popover>
               }>
               <button className='transBtn mb-1'>
                  {activity ? (
                     <Icon.IoHeartSharp className='CursorP ' />
                  ) : (
                     <Icon.IoHeartOutline className='CursorP ' />
                  )}
               </button>
            </OverlayTrigger>

            <Dropdown>
               <Dropdown.Toggle variant='transparent' className='p-0 mb-1 '>
                  <img
                     src={myProfileImg}
                     className='rounded-circle CursorP'
                     width='20px'
                     height='20px'
                     alt=''
                  />
               </Dropdown.Toggle>
               <Dropdown.Menu className='border-0 shadow rounded rounded-5 '>
                  <Dropdown.Item>
                     <Link to='/Profile' className='link-dark text-decoration-none'>
                        <button className='w-100 transBtn d-flex align-items-center gap-2'>
                           <CgProfile className='fs-5' />
                           Profile
                        </button>
                     </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <Link to='/Profile' className='link-dark text-decoration-none'>
                        <button className='w-100 transBtn d-flex align-items-center gap-2'>
                           <Icon.IoBookmarkOutline className='fs-5' />
                           Saved
                        </button>
                     </Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <button className='w-100 transBtn d-flex align-items-center gap-2'>
                        <Icon.IoSettings className='fs-5' />
                        Settings
                     </button>
                  </Dropdown.Item>
                  <Dropdown.Item>
                     <button className='w-100 transBtn d-flex align-items-center gap-2'>
                        <Icon.IoSync className='fs-5' />
                        Switch Accounts
                     </button>
                  </Dropdown.Item>
                  <hr />
                  <Dropdown.Item>
                     <Link to='/Login' className='text-decoration-none link-dark'>
                        <button className='w-100 transBtn'>Log out</button>
                     </Link>
                  </Dropdown.Item>
               </Dropdown.Menu>
            </Dropdown>
            {/* Add Post Btn Modal */}

            <Modal
               centered
               dialogClassName='border-radius-2'
               className='bg-transparent'
               show={show}
               size='md'
               onHide={handleClose}>
               <Modal.Body>
                  <label className='AddPostLabel'>Create New Post</label>
                  <input type='file' ref={inputFile} className='visually-hidden' />
                  <img src={AddImg} alt='' />
                  <Button
                     onClick={() => {
                        inputFile.current.click();
                     }}
                     variant='primary'>
                     Select From Computer
                  </Button>
               </Modal.Body>
            </Modal>
         </div>
      </div>
   );
}
