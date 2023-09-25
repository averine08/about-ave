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
    <div className='w-[80%] max-w-fit lg:h-[500px] rounded-md bg-biru-light_50 lg:p-18 sm:p-4 min-w-full flex flex-col items-center sm:h-[300px]'>
      <div className='flex justify-center items-center w-full h-full duration-300'>
          <div className=' cursor-pointer '>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-left-square" type="solid" onClick={prevSlide}></box-icon>
          </div>
          <div className="h-[90%] w-[50%] bg-cover bg-center duration-300 flex self-items"  
              style={{ backgroundImage: `url(${CollImages[currentIndex]})` }}
              
              > {/*  min-h-[400px]*/}
            {console.log('Ini collImages'+ CollImages[currentIndex])}
          </div>
          <div className=' cursor-pointer'>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-right-square" type="solid" onClick={nextSlide}></box-icon>
          </div>
        </div>
        <div className='w-[80%] p-1 bg-biru-light_50'>
          <h2>{achievement.title}</h2>
          <p>{achievement.year}</p>
          <p>{achievement.description}</p>

        </div>

  </div>
  )
}

export default CarouselItemIMG2