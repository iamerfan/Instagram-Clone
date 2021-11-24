import React from 'react';

export default function NotFound() {
   return (
      <div
         className='d-flex flex-column border align-items-center fs-5 py-5 gap-3 text-center'
         style={{ minHeight: '80vh' }}>
         <strong>Sorry, this page isn't available.</strong>
         <p>
            The link you followed may be broken, or the page may have been
            removed. Go back to Instagram.
         </p>
      </div>
   );
}
