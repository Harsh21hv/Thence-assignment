import React from 'react';
import { useState } from 'react';

const Acordian = () => {
  const [states, setStates] = useState([false, false, false, false]);

  const data = [
    {
      ques: 'Do you offer freelancers?',
      ans: ' Yes, We Do offer freelancers great projects !!!',
    },
    {
      ques: "Whats's the guarantee that i will be satisfied with the hired talent?",
      ans: '  We hire talents who have great skills with profound <br> knowledge in their domain',
    },
    {
      ques: 'Can I hire multiple talents at once?',
      ans: ' If unhappy with a project, communicate with the freelancer, allow <br /> for revisions, and refer to the agreement. Escalate to platform<br /> support if needed, considering mediation. Review policies,<br /> seek collaborative solutions for.',
    },
    {
      ques: 'Why should I not go to an agency directly?',
      ans: ' Yes, We Do offer freelancers great projects !!!',
    },
    {
      ques: 'Who can help me pick a right skillset and duration for me?',
      ans: ' Demo answer',
    },
  ];
  return (
    <div>
      {data.map((el, index) => (
        <div key={index}>
          <div className='h-[24px] flex justify-between  w-96 py-10'>
            <h1 className='text-xl  h-fit'>{el.ques}</h1>
            <button
              className='mr-2'
              onClick={() => {
                setStates((prevStates) => {
                  const updatedStates = [...prevStates];
                  updatedStates[index] = !updatedStates[index];

                  return updatedStates;
                });
              }}
            >
              {states[index] === true ? '-' : '+'}
            </button>
          </div>
          {states[index] === true ? (
            <p className='text-gray-500 text-md w-96 mt-8 h-fit'>{el.ans}</p>
          ) : (
            ''
          )}
        </div>
      ))}
    </div>
  );
};

export default Acordian;
