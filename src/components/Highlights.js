import React, { useContext, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Story from './Story';
import { DataContext } from '../context/DataContext';
import { Modal } from 'react-bootstrap';
import { BiVolumeFull, BiVolumeMute, BiPlay, BiPause } from 'react-icons/bi';
import { IoIosMore } from 'react-icons/io';
import { IoPaperPlaneOutline } from 'react-icons/io5';

export default function Highlights() {
   const data = useContext(DataContext);
   const [show, setShow] = useState(false);
   const [mute, setMute] = useState(true);
   const [pause, setPause] = useState(true);
   const [visibility, setVisibility] = useState('hidden');
   const [userInfo, setUserInfo] = useState();
   const handleClose = () => {
      setShow(false);
   };

   const handleShow = (user) => {
      setShow(true);
      setUserInfo(user);
   };

   const responsive = {
      superLargeDesktop: {
         breakpoint: { max: 4000, min: 3000 },
         items: 6,
         slidesToSlide: 3,
      },
      desktop: {
         breakpoint: { max: 3000, min: 1024 },
         items: 6,
         slidesToSlide: 3,
      },
      tablet: {
         breakpoint: { max: 1024, min: 464 },
         items: 5,
         slidesToSlide: 3,
      },
      mobile: {
         breakpoint: { max: 464, min: 0 },
         items: 4,
         slidesToSlide: 3,
      },
   };

   return (
      <>
         <Carousel containerClass='mt-3' responsive={responsive}>
            {data.map((user) => {
               return (
                  <button
                     key={user.id}
                     className='HighlightBtn'
                     onClick={(e) => {
                        e.target.childNodes[0].style.borderColor = 'gray';
                        handleShow(user);
                     }}>
                     <Story
                        key={user.id}
                        username={user.name}
                        profileImg={user.post[0].Img}
                     />
                  </button>
               );
            })}
         </Carousel>
         <Modal
            show={show}
            size='md'
            className='bg-dark'
            dialogClassName='RoundedStory'
            onHide={handleClose}>
            <Modal.Body
               className='darkModal '
               style={
                  userInfo && {
                     backgroundImage: `url(${userInfo.post[0].Img})`,
                  }
               }>
               <div className='StoryModalHeader'>
                  <div>
                     {userInfo && userInfo.username}
                     {userInfo && userInfo.stories[0].Time}
                  </div>
                  <div>
                     <button
                        onClick={() =>
                           pause ? setPause(false) : setPause(true)
                        }>
                        {pause ? <BiPause /> : <BiPlay />}
                     </button>
                     <button
                        onClick={() => (mute ? setMute(false) : setMute(true))}>
                        {mute ? <BiVolumeMute /> : <BiVolumeFull />}
                     </button>
                     <button>
                        <IoIosMore />
                     </button>
                  </div>
               </div>
               <div className='StoryFooter'>
                  <div className='StoryInput'>
                     <input
                        onFocus={() => setVisibility('visible')}
                        onBlur={() => setVisibility('hidden')}
                        type='text'
                        placeholder='Reply To This Story...'
                     />
                     <button
                        style={{ visibility: visibility }}
                        className='blueBtn'>
                        Send
                     </button>
                  </div>
                  {visibility === 'hidden' && (
                     <button className='DirectStory'>
                        <IoPaperPlaneOutline />
                     </button>
                  )}
               </div>
            </Modal.Body>
         </Modal>
      </>
   );
}
