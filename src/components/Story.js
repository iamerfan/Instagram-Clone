import React from 'react';

export default function Story(props) {
   return (
      <div className='Story'>
         <div className='StoryIMG'>
            <img src={props.profileImg} alt='' />
         </div>
         <label className='StoryPN'>{props.username}</label>
      </div>
   );
}
