import React from 'react';

export default function SearchHistory(props) {
   return (
      <div className='SearchHistoryDiv'>
         <div className='d-flex gap-3 mt-3'>
            <div className='PostProfileIMG'>
               <img src={props.profileImg} alt='' />
            </div>
            <label className='fs-6'>
               <strong className='PostPN'>{props.username}</strong>
               <p className='UserSuggestText'>Recent Search History</p>
            </label>
         </div>
      </div>
   );
}
