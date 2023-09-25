/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from 'react';

const CarouselItemIMG2 = ({achievement}) => {
    // const [activeIndex, setActiveIndex] = useState(0);
    const CollImages = [
        achievement.images[0],
        achievement.images[1],
        achievement.images[2],
        achievement.images[3],
    ];
    
    console.log(CollImages[0]);
    // const Image = [achievement.images[0],achievement.images[1],achievement.images[2],achievement.images[3]]
    // const [activeIndex, se]
    const [currentIndex, setCurrentIndex] = useState(0)
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? CollImages.length - 1 : currentIndex - 1;
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === CollImages.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  
    const goToSlide = (slideIndex) => {
      setCurrentIndex(slideIndex);
    };

  return (
    <div className=' lg:min-h-[500px] lg:max-h-[900px] rounded-md bg-biru-light_50 lg:p-18 sm:py-10 min-w-full flex flex-col items-center sm:min-h-[300px] sm:h-[500px] sm:w-[300px]'>
      <div className='flex justify-center items-center w-full h-max group min-h-fit'>
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={prevSlide}>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-left-square" type="solid" color="#001220" ></box-icon>
          </div>
          <div style={{ backgroundImage: `url(${CollImages[currentIndex]})`}}
                className=" sm:w-[80%] bg-cover bg-center duration-500 lg:w-[50%] sm:h-52 lg:h-[100%] rounded-md "  
              
              
              > {/*  min-h-[400px]*/}
            {console.log('Ini collImages'+ CollImages[currentIndex])}
          </div>
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={nextSlide}>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-right-square" type="solid" size="sm" color="#001220"></box-icon>
          </div>
        </div>
        <div className='sm:w-[80%] lg:w-[50%] py-10 bg-biru-light_50 font-normal'>
          <h2 className='font-bold text-ungu'>{achievement.title}</h2>
          <p className='text-ungu'>{achievement.year}</p>
          <p>{achievement.description}</p>

        </div>

  </div>
  )
}

export default CarouselItemIMG2