import React, { useContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { DataContext } from '../context/DataContext';
import ExploreItem from './ExploreItem';

export default function Explore() {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   const data = useContext(DataContext);
   return (
      <div className='ExploreContainer'>
         <div className={isD ? 'ExplorePanel' : 'ExplorePanelSmall'}>
            {data.map(item => {
               return (
                  <ExploreItem key={item.id} Likes={item.post[0].Likes} img={item.post[0].Img} />
               );
            })}
         </div>
      </div>
   );
}
