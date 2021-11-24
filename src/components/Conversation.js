import React from 'react';
import { useMediaQuery } from 'react-responsive';

export default function Conversation(props) {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   return (
      <div className={props.classname}>
         <div className='PostProfileIMG bg-transparent'>
            <img src={props.profilePic} alt='' />
         </div>

         <label className='CursorP'>
            <p>{props.username}</p>
            {isD && <p className='UserSuggestText '>Last Seen Recently</p>}
         </label>
      </div>
   );
}
