import React from 'react';

const Footer = () => {
  return (
    <div className=' mt-6 mx-8 h-28 rounded-3xl flex justify-between border border-slate-200 bg-gray-100 font-mano'>
      <div className='text-gray-500 mt-12 ml-10'>
        &copy;Talup 2023. All rights reserved
      </div>
      <div className='text-gray-500 mt-12 mr-20'>
        <a href='#' className=' text-gray-500'>
          Terms & conditions
        </a>
        <a href='#' className=' text-gray-500 ml-10'>
          Privacy policy
        </a>
      </div>
    </div>
  );
};

export default Footer;
