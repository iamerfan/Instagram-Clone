import React from 'react';
import { BsInfoCircle, BsInfoCircleFill } from 'react-icons/bs';

export default function DirectDetails(props) {
   const user = props.SendData;
   return (
      <div className='ChatDetails '>
         <div className='ChatDetailsHeader'>
            <label>Details</label>
            <BsInfoCircleFill
               onClick={() => props.handleInfo(false)}
               className='fs-4 '
            />
         </div>
         <div className='ChatDetailsBody'>
            <div className='MutePanel'>
               <input type='checkbox' />
               <label>Mute Messages</label>
            </div>
            <div className='MemberPanel'>
               <label>Members</label>
               <img
                  className='rounded-circle'
                  width='70px'
                  height='70px'
                  src={user.profileImg}
                  alt=''
               />
               <div className='d-flex flex-column'>
                  {user.username} <p className='opacity-50 mb-0'>{user.name}</p>
               </div>
            </div>
            <div className='OptionsPanel'>
               <button className='redBtn'>Delete Chat</button>
               <button className='redBtn'>Block</button>
               <button className='redBtn'>Report</button>
            </div>
         </div>
      </div>
   );
}
