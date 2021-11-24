import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import myProfile from '../assets/myProfile.jpg';
import { IoIosSettings } from 'react-icons/io';
import { GoVerified } from 'react-icons/go';
import Highlights from './Highlights';
import ExploreItem from './ExploreItem';
import { useMediaQuery } from 'react-responsive';

export default function Profile() {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   const user = useContext(DataContext);
   const [Posts, setPosts] = useState(true);
   const [Tagged, setTagged] = useState(false);
   const [Saved, setSaved] = useState(false);
   console.log();
   return (
      <div className='ProfileContainer'>
         <div className={isD ? 'ProfileDiv' : 'ProfileDivSmall'}>
            <div className='ProfileTop'>
               <div className='LogoDiv'>
                  <img src={myProfile} alt='Logo' />
               </div>
               <div className='InfoDiv'>
                  <div className='FollowDiv'>
                     <i>
                        <label className='fs-3 fw-lighter'>i.am.erfan</label>
                        <GoVerified className='text-primary' />
                     </i>
                     <button className='btn btn-light border'>Edit Profile</button>
                     <button className='transBtn fs-3'>
                        <IoIosSettings />
                     </button>
                  </div>
                  <div className='FollowersDiv'>
                     <label htmlFor=''>
                        <strong>2</strong> Posts
                     </label>
                     <label htmlFor=''>
                        <strong>240 </strong>followers
                     </label>
                     <label htmlFor=''>
                        <strong>240 </strong>following
                     </label>
                  </div>
                  <div className='bio'>bio</div>
               </div>
            </div>
            <div className='Highlights'>
               <Highlights />
            </div>
            <div className='ProfileBottom'>
               <div className='Tabs'>
                  <button
                     onClick={() => {
                        setPosts(true);
                        setTagged(false);
                        setSaved(false);
                     }}
                     className={Posts ? 'transBtn TabActive' : 'transBtn'}>
                     Posts
                  </button>
                  <button
                     onClick={() => {
                        setPosts(false);
                        setTagged(false);
                        setSaved(true);
                     }}
                     className={Saved ? 'transBtn TabActive' : 'transBtn'}>
                     Saved
                  </button>
                  <button
                     onClick={() => {
                        setPosts(false);
                        setSaved(false);
                        setTagged(true);
                     }}
                     className={Tagged ? 'transBtn TabActive' : 'transBtn'}>
                     Tagged
                  </button>
               </div>
               {Posts && (
                  <div className={isD ? 'ProfilePosts' : 'ProfilePostsSmall'}>
                     {user.map(item => {
                        if (item.id >= 8) {
                           return <ExploreItem Likes={item.post[0].Likes} img={item.post[0].Img} />;
                        }
                        return null;
                     })}
                  </div>
               )}
               {Saved && (
                  <div className={isD ? 'ProfilePosts' : 'ProfilePostsSmall'}>
                     {user.map(item => {
                        if (item.id > 2 && item.id < 6) {
                           return <ExploreItem Likes={item.post[0].Likes} img={item.post[0].Img} />;
                        }
                        return null;
                     })}
                  </div>
               )}
               {Tagged && (
                  <div className={isD ? 'ProfilePosts' : 'ProfilePostsSmall'}>
                     {user.map(item => {
                        if (item.id > 0 && item.id <= 4) {
                           return <ExploreItem Likes={item.post[0].Likes} img={item.post[0].Img} />;
                        }
                        return null;
                     })}
                  </div>
               )}
            </div>
         </div>
      </div>
   );
}
