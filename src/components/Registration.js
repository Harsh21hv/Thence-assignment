import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';

const Registration = () => {
  const [email1, setEmail] = useState('');
  const [name1, setName] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const isButtonDisabled = email1 === '' || name1 === '';
  const navigate = useNavigate();
  const handleSubmit = () => {
    const isValid = validateEmail(email1);
    if (!isValid) {
      setErrorMessage('Please enter a valid email address.');
    } else {
      navigate('/success');
    }
  };
  const [errorMessage, setErrorMessage] = useState('');

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };
  return (
    <div>
      <div className=' mt-6 mx-10 h-20 rounded-full flex justify-between '>
        <img src='/Logo.png' alt='logo' className='w-40 h-10 ml-16 mt-4' />
        <div>
          <button
            className=' mr-5 rounded-full text-black   mt-3 p-3 border border-slate-300 hover:bg-slate-100'
            onClick={() => navigate('/browse')}
          >
            ╳
          </button>
        </div>
      </div>

      <div className='flex justify-center flex-col items-center '>
        <h3 className='font-body text-green-600 text-4xl mt-20'>
          {' '}
          Registration form
        </h3>
        <h1 className='text-[56px]'>
          Start your success <br />
        </h1>
        <h1 className='text-[56px] -mt-6'>
          journey here
          <br />
        </h1>
        <form
          id='myForm'
          onSubmit={(e) => e.preventDefault()}
          className='flex justify-center flex-col items-center gap-[47px] mt-16 '
        >
          <input
            required
            type='text'
            value={name1}
            placeholder='Enter your name'
            className='p-3 bg-gray-200 rounded-3xl w-[300px] '
            onChange={handleNameChange}
          />
          <div>
            <input
              type='email'
              placeholder='Enter your email'
              value={email1}
              className='p-3 bg-gray-200 rounded-3xl w-[300px] '
              onChange={handleEmailChange}
            />
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>

          <button
            type='submit'
            className={`p-3 bg-gray-400 rounded-3xl w-[300px] text-white ${
              isButtonDisabled ? '' : ' hover:bg-black'
            }`}
            onClick={handleSubmit}
            disabled={isButtonDisabled}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
