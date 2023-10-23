/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
const CarouselItemIMG = ({achievement, key, activeIdx}) => {
  
  
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
    // <div className='bg-biru-light_50'>
    <div className='rounded-md bg-biru-light_50 sm:py-10 sm:min-w-[100%] flex sm:flex-col items-center self-center sm:min-h-[600px] md:min-h-[560px] lg:min-h-[500px]  sm:w-full transition-transform ease-in-out duration-500'  style={{  transform: `translateX(-${activeIdx *100}%)`}}>
      <div className='flex relative inset-0 justify-center items-center w-full group lg:h-fit sm:min-h-fit sm:snap-center'> 
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={prevSlide}>
            <box-icon name="chevron-left-square" type="solid" color="#001220" ></box-icon>
          </div>

          <div style={{ backgroundImage: `url(${achievement.images[currentIndex]})`}}
                className=" sm:w-[80%] bg-contain bg-no-repeat bg-center duration-500 lg:w-[80%] md:min-h-[300px] sm:h-52 "      
          > 
          </div>
          <div className=' cursor-pointer opacity-25 group-hover:opacity-100 duration-200' onClick={nextSlide}>
            {/*className=' absolute top-[50%]  -translate-x-[-100%] translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer' */}
            <box-icon name="chevron-right-square" type="solid" size="sm" color="#001220"></box-icon>
          </div>
      </div>
      <div className='sm:w-[85%]  md:w-[80%] lg:w-[70%]  h-fit bg-transparent font-normal pt-5'>
        <p className='p-1 px-2 bg-biru-light/100 text-xs font-semibold text-putih w-fit rounded-md'>{achievement.type}</p>
        <h1 className='text-biru-pastel font-bold text-xl '>{achievement.title}</h1>
        <p>{achievement.description}</p>
      </div>
    </div>
    // </div>
  )
}

export default CarouselItemIMG