import React from 'react';
import Header from './Header';
import PrimaryContainer from './PrimaryContainer';
import FaqSection from './FaqSection';
import Footer from './Footer';

const Browse = () => {
  return (
    <div className=''>
      <Header />
      <PrimaryContainer />
      <div className='mt-72'>
        {' '}
        <FaqSection />
       <Footer/>
      </div>
    </div>
  );
};

export default Browse;
