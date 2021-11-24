import React from 'react';
import Timeline from './Timeline';
import Suggest from './Suggest';
import { useMediaQuery } from 'react-responsive';

export default function Home() {
   const isD = useMediaQuery({
      query: '(min-width: 1224px)',
   });
   return (
      <div className='HomeDiv'>
         <Timeline />
         {isD && <Suggest />}
      </div>
   );
}
