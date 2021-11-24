import React, { useRef, useState } from 'react';
import {
   IoEllipsisHorizontalSharp,
   IoHeartOutline,
   IoHeartSharp,
   IoChatbubbleOutline,
   IoBookmarkOutline,
   IoPaperPlaneOutline,
   IoBookmark,
} from 'react-icons/io5';
import { FcLike } from 'react-icons/fc';
import { GrEmoji } from 'react-icons/gr';

export default function Post(props) {
   const CommentRef = useRef();
   const [liked, setLiked] = useState(false);
   const [ShowHeart, setShowHeart] = useState(false);
   const [Saved, setSaved] = useState(false);
   const handleDC = () => {
      !liked && setLiked(true);
      setShowHeart(true);
      setTimeout(() => {
         setShowHeart(false);
      }, 1000);
   };
   return (
      <div className='Post'>
         <div className='PostHeader'>
            <div className='PostProfile'>
               <div className='PostProfileIMG'>
                  <img
                     src={props.profileImg}
                     style={{
                        height: '100%',
                        width: '100%',
                        borderRadius: '50%',
                     }}
                     alt=''
                  />
               </div>
               <label className='PostProfileName'>{props.username}</label>
            </div>
            <IoEllipsisHorizontalSharp />
         </div>
         <div className='PostIMG'>
            <img onDoubleClick={handleDC} src={props.Image} alt='' />
            <IoHeartSharp
               className='DcIcon'
               style={ShowHeart && { opacity: '1' }}
            />
         </div>

         <div className='PostFooter'>
            <div className='PostIcons'>
               <div className='LeftPostIcons'>
                  {liked ? (
                     <FcLike onClick={() => setLiked(false)} />
                  ) : (
                     <IoHeartOutline onClick={() => setLiked(true)} />
                  )}
                  <IoChatbubbleOutline
                     className='Rotate180 '
                     onClick={() => CommentRef.current.focus()}
                  />
                  <IoPaperPlaneOutline className='HoverOp' />
               </div>

               {Saved ? (
                  <IoBookmark onClick={() => setSaved(false)} />
               ) : (
                  <IoBookmarkOutline onClick={() => setSaved(true)} />
               )}
            </div>
            <div className='PostLikes'>
               <strong>{liked ? props.Likes + 1 : props.Likes} Likes</strong>
            </div>
            <div className='PostDiscription'>
               <label className='PostPN CursorP'>{props.username}</label>
               <p>{props.Discription}</p>
               <p
                  className='CursorP opacity-75'
                  onClick={(e) => {
                     e.target.style.display = 'none';
                  }}>
                  ...more
               </p>
            </div>
            <div className='PostComments'>
               <p>View All {props.Comments} Comment's</p>
               <p className='PostTime'>{props.Time}</p>
            </div>
            <div className='PostInput'>
               <GrEmoji className='fs-3 CursorP' />
               <input
                  type='text'
                  ref={CommentRef}
                  placeholder='Add a Comment ...'
               />
               <button className='blueBtn'>Post</button>
            </div>
         </div>
      </div>
   );
}
