import React from 'react';
import Acordian from './Acordian';

const FaqSection = () => {
  return (
    <div className='mx-8 mt-40'>
      <div className=' mx-auto rounded-3xl bg-green-100 mt-96 flex flex-row'>
        <div className=''>
        <div className='pt-10 pl-20 w-fit '>
          
          <p className='font-body text-gray-500 text-2xl '>
            what's on your mind
          </p>
          <h1 className='font-mano text-5xl'>Ask Questions</h1>
        </div>
        
        <img
          src='/Union.png'
          alt='img'
          className='w-[490px] h-[514px] mt-24'
        />
        </div>
        <div className='m-auto  h-fit '>
         <Acordian/>
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
