import React from 'react';
import { IoHeartSharp, IoChatbubbleSharp } from 'react-icons/io5';

export default function ExploreItem(props) {
   return (
      <div
         className='ExploreGridItem'
         style={props.img && { backgroundImage: `url(${props.img})` }}>
         <div className='buttons'>
            <i>
               <IoHeartSharp className='fs-4' />
               {props.Likes}
            </i>
            <i>
               <IoChatbubbleSharp className='fs-4 Rotate180' />
               {Math.round(props.Likes / 5)}
            </i>
         </div>
      </div>
   );
}
