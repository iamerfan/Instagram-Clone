import React, { useState } from 'react';

export default function UserSuggest(props) {
   const [Follow, setFollow] = useState(false);
   return (
      <div className='d-flex gap-5 align-items-center'>
         <div className='d-flex gap-3'>
            <div className='PostProfileIMG'>
               <img src={props.profilePic} alt='' />
            </div>
            <label className='fs-6'>
               <strong className='PostPN'>{props.username}</strong>
               <p className='UserSuggestText'>New To Instagram</p>
            </label>
         </div>

         {Follow ? (
            <button
               onClick={() => {
                  setFollow(false);
               }}
               className='redBtn'>
               Following
            </button>
         ) : (
            <button
               onClick={() => {
                  setFollow(true);
               }}
               className='blueBtn'>
               Follow
            </button>
         )}
      </div>
   );
}
