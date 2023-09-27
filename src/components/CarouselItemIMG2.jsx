/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from 'react';

const CarouselItemIMG2 = ({achievement}) => {
    // const [activeIndex, setActiveIndex] = useState(0);
    // const CollImages = [
    //     achievement.images[0],
    //     achievement.images[1],
    //     achievement.images[2],
    //     achievement.images[3],
    // ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(0)
    useEffect(() => {
      setLength(achievement.images.length)
    },[achievement.images])
    
    const prevSlide = () => {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? length - 1 : currentIndex - 1;
      console.log(newIndex)
      setCurrentIndex(newIndex);
    };
  
    const nextSlide = () => {
      const isLastSlide = currentIndex === length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurrentIndex(newIndex);
    };
  

  return (
    
    <div className='rounded-md bg-biru-light_50 sm:py-10 lg:py-6 sm:min-w-[100%] flex sm:flex-col lg:flex-row items-center self-center sm:min-h-[680px] md:h-[500px] lg:min-h-[300px] lg:min-w-[75%] xl:w-1/4 sm:w-[300px]'> {/* jadi da rata  pas min-w diganti jadi 90% taidnya 100*/}
      <div className='flex justify-center items-center w-full lg:w-[900px] group md:h-[700px] lg:h-[200px] sm:min-h-fit sm:snap-center'> 
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={prevSlide}>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-left-square" type="solid" color="#001220" ></box-icon>
          </div>
          <div style={{ backgroundImage: `url(${achievement.images[currentIndex]})`}}
                className=" sm:w-[80%] bg-contain bg-no-repeat bg-center duration-500 lg:w-[80%] md:min-h-[300px] sm:h-52 "  
              
              
              > {/*  min-h-[400px]*/}
            {/* {console.log('Ini collImages'+ CollImages[currentIndex])} */}
          </div>
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={nextSlide}>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-right-square" type="solid" size="sm" color="#001220"></box-icon>
          </div>
        </div>
        <div className='sm:w-[100%] sm:pl-10 lg:w-[80%] lg:pl-0 h-fit pr-10 bg-biru-light_50 font-normal'>
          <p className='p-1 px-2 bg-biru-light/100 text-xs font-semibold text-putih w-fit rounded-md'>{achievement.type}</p>
          <h1 className='text-biru-pastel font-bold text-xl '>{achievement.title}</h1>
          <p>{achievement.description}</p>

        </div>

  </div>
  )
};
export default CarouselItemIMG2

