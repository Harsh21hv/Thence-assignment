import React from 'react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className=' mt-6 mx-10 h-20 rounded-full flex justify-between border border-slate-200'>
        <img src='/Logo.png' alt='logo' className='w-40 h-10 ml-16 mt-4' />
        <div>
          <button
            className='mr-10 bg-white rounded-full my-2 p-5 border border-slate-200 hover:bg-slate-100'
            onClick={() => navigate('/registration')}
          >
            Get Projects
          </button>
          <button className='bg-black text-white mr-5 rounded-full  p-5 border border-slate-200 hover:bg-gray-600'>
            {' '}
            Onboard Talent
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
