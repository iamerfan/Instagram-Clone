import React, { useContext } from 'react';
import Post from './Post';
import Stories from './Stories';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from '../context/DataContext';

export default function Timeline() {
   const data = useContext(DataContext);
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   return (
      <div className={isD === true ? 'Posts' : 'PostsMobile'}>
         <Stories />
         {data.map((user) => {
            return (
               <Post
                  key={user.id}
                  username={user.username}
                  profileImg={user.profileImg}
                  Image={user.post[0].Img}
                  Likes={user.post[0].Likes}
                  Discription={user.post[0].Discription}
                  Comments={user.post[0].CommentsCount}
                  Time={user.post[0].Time}
               />
            );
         })}
      </div>
   );
}
