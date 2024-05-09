import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
  };
  return (
    <div className='slider-container   '>
      <Slider {...settings} className='gap-2'>
        <div className=''>
          <h3 className='text-[35px]  '>
            Enhance fortune 50 company’s insights
            <br /> teams research <br /> capabilities
          </h3>
        </div>
        <div>
          <h3 className='text-[35px] '>
            Enhance fortune 50 company’s <br /> teams research <br />{' '}
            capabilities
          </h3>
        </div>
        <div>
          <h3 className='text-[35px] '>
            Enhance fortune 50 company’s <br /> teams research <br />{' '}
            capabilities
          </h3>
        </div>
        <div>
          <h3 className='text-[35px] '>
            Enhance fortune 50 company’s <br /> teams research <br />{' '}
            capabilities
          </h3>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
