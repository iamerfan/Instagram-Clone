import React, { useContext, useState } from 'react';
import SearchHistory from './SearchHistory';
import { DataContext } from '../context/DataContext';

export default function SearchPanel(props) {
   const userData = useContext(DataContext);
   const [Clear, setClear] = useState(false);
   return (
      <div className='SearchPanel'>
         <div className='SearchbarHeader'>
            <div className='leftSide'>
               <button onClick={() => props.hide(false)} className='transBtn'>
                  X
               </button>
               <label>Recent</label>
            </div>

            <button className='blueBtn' onClick={() => setClear(true)}>
               Clear All
            </button>
         </div>
         <div className='SearchbarBody'>
            {!Clear ? (
               userData.map((user) => {
                  if (user.id >= 8) {
                     return (
                        <SearchHistory
                           key={user.id}
                           username={user.username}
                           profileImg={user.profileImg}
                        />
                     );
                  }
                  return null;
               })
            ) : (
               <p className='text-center mt-5 pt-5'>No recent searches</p>
            )}
         </div>
      </div>
   );
}
