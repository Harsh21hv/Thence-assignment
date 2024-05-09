import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Success = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      navigate('/browse');
    }, 5000);

    return () => clearTimeout(timeoutId);
  }, [navigate]);

  
  return (
    <div>
      <div className=' mt-6 mx-10 h-20 rounded-full flex justify-between '>
        <img src='/Logo.png' alt='logo' className='w-40 h-10 ml-16 mt-4' />
      </div>
      <div className='flex justify-center flex-col items-center gap-56'>
        <div className='flex justify-center flex-col items-center gap-5'>
          <img src='/Done.png' alt='img' className='mt-20 ' />
          <h3 className='font-body text-green-600 text-4xl'>
            Success Submitted
          </h3>
          <h1 className='font-mano font-medium text-5xl'>Congratulations</h1>
          <p className='text-gray-500 text-xl'>
            Your request has been successfully submitted to us. We <br />
            <span className='mx-5'>
              will validate your information and reach out to you
            </span>
            <br />
            <span className='mx-28'>shortly with updates </span>
          </p>
        </div>
        <p className='font-mano text-gray-500'>
          {' '}
          Redirecting you to Homepage in{' '}
          <span className='font-mono font-medium text-black'> 5 Seconds</span>
        </p>
      </div>
    </div>
  );
};

export default Success;
