import React, { useRef, useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import { GrGallery, GrEmoji } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';
import { IoHeartOutline } from 'react-icons/io5';
import { BsInfoCircle } from 'react-icons/bs';
import DirectDetails from './DirectDetails';

export default function DirectChat(props) {
   const [liked, setLiked] = useState(false);
   const [info, setInfo] = useState(false);
   const [chat, setChat] = useState([
      {
         message: 'Hi',
         id: 0,
         className: 'Send',
      },
      {
         message: 'Hello',
         id: 1,
         className: 'Recieve',
      },
      {
         message: 'How Are You?!',
         id: 2,
         className: 'Send',
      },
      {
         message: 'Thank You',
         id: 3,
         className: 'Recieve',
      },
   ]);
   const [sendBtnHide, setSendBtnHide] = useState(true);
   const GalleryRef = useRef();
   const InputRef = useRef();
   const containerRef = useRef();
   const user = props.SendData;
   const handleChange = e => {
      e.target.value !== '' ? setSendBtnHide(false) : setSendBtnHide(true);
   };
   const handleInfo = value => {
      info && setInfo(value);
   };
   const handleSubmit = e => {
      e.preventDefault();
      if (InputRef.current.value !== '') {
         setChat(prevState => [
            ...prevState,
            {
               message: InputRef.current.value,
               id: Date.now(),
               className: 'Send',
            },
         ]);
         InputRef.current.value = '';
      }
   };

   useEffect(() => {
      if (containerRef && containerRef.current) {
         const element = containerRef.current;
         element.scroll({
            top: element.scrollHeight,
            left: 0,
            behavior: 'smooth',
         });
      }
   }, [containerRef, chat]);

   return (
      <div className='ChatPanel'>
         {user ? (
            !info ? (
               <>
                  <div className='ChatHeader'>
                     <div className='ChatHeaderLeft'>
                        <img
                           className='rounded-circle'
                           width='30px'
                           height='30px'
                           src={user.profileImg}
                           alt=''
                        />
                        {user.username}
                     </div>
                     <BsInfoCircle
                        onClick={() => (!info ? setInfo(true) : setInfo(false))}
                        className='fs-4 '
                     />
                  </div>
                  <div className='ChatMessage' ref={containerRef}>
                     <div className='ChatContainer'>
                        {chat.map(item => (
                           <div key={item.id} className={item.className}>
                              <div className='Chatdiv'>{item.message}</div>
                           </div>
                        ))}
                     </div>
                  </div>

                  <div className='ChatFooter'>
                     <form onSubmit={handleSubmit}>
                        <div className='InputChatPanel'>
                           <GrEmoji className='fs-1' />
                           <input
                              ref={InputRef}
                              onChange={handleChange}
                              type='text'
                              placeholder='Message...'
                           />
                           {!sendBtnHide ? (
                              <button type='submit' className='blueBtn'>
                                 Send
                              </button>
                           ) : (
                              <div className='fs-4 d-flex gap-3 align-items-center'>
                                 <input
                                    type='file'
                                    className='visually-hidden'
                                    ref={GalleryRef}
                                    id=''
                                 />
                                 <GrGallery onClick={() => GalleryRef.current.click()} />
                                 {liked ? (
                                    <FcLike className='fs-2' onClick={() => setLiked(false)} />
                                 ) : (
                                    <IoHeartOutline
                                       onClick={() => setLiked(true)}
                                       className='fs-2'
                                    />
                                 )}
                              </div>
                           )}
                        </div>
                     </form>
                  </div>
               </>
            ) : (
               <DirectDetails handleInfo={handleInfo} SendData={user} />
            )
         ) : (
            <>
               <div className='ChatMessage align-items-center justify-content-center'>
                  <div className='NoConversation '>
                     <div className='defaultNoconvo'>
                        <i className=' borderIcon '>
                           <FiSend className='fs-3' />
                        </i>
                        <br />
                        <h4 style={{ textAlign: 'center' }}>Your Messages</h4>
                        <p className='text-center'>
                           Send private photos and messages to a friend or group
                        </p>
                     </div>
                     <button
                        onClick={() => props.Clicked(true)}
                        className='ChatBtn btn btn-primary '>
                        Send Message
                     </button>
                  </div>
               </div>
            </>
         )}
      </div>
   );
}
