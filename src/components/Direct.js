import React, { useState, useContext } from 'react';
import DirectChat from './DirectChat';
import DirectList from './DirectList';
import { DataContext } from '../context/DataContext';
import Conversation from './Conversation';
import { IoIosClose } from 'react-icons/io';
import { Modal } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

export default function Direct() {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   const [ChatData, setChatData] = useState();
   const [show, setShow] = useState(false);
   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   const userData = useContext(DataContext);
   const handleConversationClick = user => {
      setChatData(user);
   };
   const handleClicked = ShowModal => {
      ShowModal && handleShow();
   };
   return (
      <div className='DMContainer'>
         <div className={isD ? 'DirectPanel' : 'DirectPanelSmall'}>
            <DirectList Clicked={handleClicked} GetData={handleConversationClick} />
            <DirectChat Clicked={handleClicked} SendData={ChatData} />
            <Modal centered show={show} dialogClassName='NewMessage' onHide={handleClose}>
               <Modal.Header className='d-flex flex-column gap-3 '>
                  <div className='SendMessageHeader'>
                     <IoIosClose className='Exit' onClick={handleClose} />
                     <label>New Message</label>
                     <button className='Next'>Next</button>
                  </div>

                  <div className='toInput  border-top border-bottom py-2'>
                     To: <input placeholder='Search...' type='text' />
                  </div>

                  <div className='SendMessageConversations'>
                     <label>Suggested</label>
                     {userData.map(user => {
                        return (
                           <div
                              key={user.id}
                              className='d-flex align-items-center justify-content-between pe-2'>
                              <Conversation
                                 username={user.username}
                                 classname={'ChatDiv'}
                                 profilePic={user.profileImg}
                              />
                              <input className='checkbox-round' type='checkbox' />
                           </div>
                        );
                     })}
                  </div>
               </Modal.Header>
            </Modal>
         </div>
      </div>
   );
}
