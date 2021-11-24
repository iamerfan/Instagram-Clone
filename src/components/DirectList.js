import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Conversation from './Conversation';
import { IoIosArrowDown } from 'react-icons/io';
import { FaRegEdit } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive';

export default function DirectList(props) {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   const userData = useContext(DataContext);
   return (
      <div className='UserPanel'>
         <div className='UserListHeader '>
            <label>
               i.am.erfan <IoIosArrowDown />
            </label>
            <FaRegEdit onClick={() => props.Clicked(true)} className='fs-3 ms-auto me-2' />
         </div>
         <div className='UserChats'>
            {userData.map(user => {
               return (
                  <button className='hoverBgGray' key={user.id} onClick={() => props.GetData(user)}>
                     <Conversation
                        onClick={() => {
                           props.GetData(user);
                           props.setInfo(false);
                        }}
                        classname='ChatDiv  justify-content-center justify-content-lg-start '
                        username={isD && user.username}
                        profilePic={user.profileImg}
                     />
                  </button>
               );
            })}
         </div>
      </div>
   );
}
