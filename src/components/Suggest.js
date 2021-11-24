import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import UserSuggest from './UserSuggest';
import myPic from '../assets/myProfile.jpg';

export default function Suggest() {
   const userData = useContext(DataContext);
   return (
      <div className='Suggest '>
         <div className='d-flex gap-4 align-items-center justify-content-start'>
            <div className='d-flex align-items-center gap-3'>
               <div className='StoryIMG border-0'>
                  <img src={myPic} alt='' />
               </div>

               <label className='d-flex flex-column'>
                  <strong className='mt-3'>i.am.erfan</strong>
                  <p className='me-4'>Erfan Hosseini</p>
               </label>
            </div>

            <button className='blueBtn'>Switch</button>
         </div>
         <div className='flex-column d-flex '>
            <label className='opacity-50 mb-3'>Suggestions For You</label>
            {userData.map((user) => {
               if (user.id >= 5) {
                  return (
                     <UserSuggest
                        key={user.id}
                        username={user.username}
                        profilePic={user.profileImg}
                     />
                  );
               }
               return null;
            })}
         </div>
         <div className='SuggestFooter'>
            About . Help . Press . API . Jobs . Privacy . Terms .
            <br />
            Locations . Top. Accounts . Hashtags . Language
            <br />
            <br />© 2021 INSTAGRAM FROM META
            <br />
            Created By Erfan
         </div>
      </div>
   );
}
