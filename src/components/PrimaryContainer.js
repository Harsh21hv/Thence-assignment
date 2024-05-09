import React from 'react';
import Carousel from './Carousel';

const PrimaryContainer = () => {
  return (
    <div>
      <div className='flex justify-center flex-col items-center '>
        <img
          src='/Success.png'
          alt='success stories'
          className='w-[300px] mt-16'
        />
        <h1 className='text-[60px] font-medium '>Every Success journey </h1>
        <h1 className='text-[60px] font-medium -mt-5'>we've encountered </h1>
      </div>

      <div className='flex flex-row justify-between'>
        <div className='mt-[5%] ml-[18%]'>
          <img
            src='/girl.png'
            alt='img'
            className='w-[480px] h-[500px] rounded-3xl '
          />
          <img
            src='/frame1.png'
            alt='frame'
            className='h-[259px] w-[265px] -mt-[73%] -ml-24'
          />
          <img
            src='/frame2.png'
            alt='frame'
            className='h-[269px] w-[285px] -mt-[6%] ml-72 '
          />
        </div>
        <div className='w-fit h-fit'>
          <div className='flex flex-row'>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className='  w-20 h-36 rounded-3xl border border-slate-200 '></div>
          </div>
          <div className='flex flex-row'>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className='  w-20 h-36 rounded-3xl border border-slate-200 '></div>
          </div>
          <div className='flex flex-row'>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className=' w-40 h-36 rounded-3xl border border-slate-200'></div>
            <div className='  w-20 h-36 rounded-3xl border border-slate-200 '></div>
          </div>
          <div className='w-40 h-14 rounded-full border border-slate-200 bg-black text-white'>
            <button className='pt-[13px] px-5'>Explore more →</button>
          </div>
        </div>
      </div>

      <div className='ml-[60%] -mt-[33%]  w-4/12'>
        <Carousel />
      </div>
    </div>
  );
};

export default PrimaryContainer;
