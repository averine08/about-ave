import React, { useState } from 'react'
import CarouselItemIMG2 from './CarouselItemIMG2';
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import CarouselItemIMG3 from './CarouselItemIMG3';
const Achievement = () => {

  
  // useEffect(() => {
  //   const nextSlide = () => {
  //     const isLastSlide = currentIndex === achivements.length-1 ;
  //     const newIndex = isLastSlide ? 0 : (currentIndex + 1);
  //     setCurrentIndex(newIndex);
  //   }
  //   // Create an interval to change the slide every 2 seconds
  //   const interval = setInterval(() => {
  //     nextSlide();
  //   }, 2000);
  //   console.log(interval);
  //   // Clear the interval when the component unmounts
  //   return () => clearInterval(interval);
  // }, [achivements.length, currentIndex]);
  const [ activeIdx, setActiveIdx ] = useState(0);

  const achievements = [
    {
      title : 'BNCC (Bina Nusantara Computer Club)',
      type : 'Organization',
      description : 'As an Activist, I met many other tech enthusiasts. Here I learned a lot about the workflow of an organization with a larger scale, soft skills, and of course hard skills. I was trusted to be a trainer, MC, and event staff at several BNCC annual events' ,
      images : [
        '../slide-show/1_1.svg',
        '../slide-show/1_2.svg',
        '../slide-show/1_3.svg',
        '../slide-show/1_4.svg',
      ]
    },
    {
      title : 'Binus FYP (First Year Program) 2026',
      type : 'Volunteer',
      description : 'As a New Student Leader, I was highly trained to adapt to ambiguous circumtances. For 7 days I collaborated with 4 other New Student Leaders to assist 60+ new students in ABN02 class. ',
      images : [
        '../slide-show/2_1.svg',
        '../slide-show/2_2.svg',
        '../slide-show/2_3.svg',
        '../slide-show/2_4.svg',
        
      ]
    },
    {
      title : 'Team Promotion Binus University',
      type : 'Part Time',
      description: 'As a member of the Content Creator Team, it is my responsibility to create videos for Instagram and Tiktok that promote Binus University to prospective college students in the high school graduates target audience. Additionally, I received a request to make a marketing video for the collaboration between Binus and Rencanamu.',
      images : [
        '../slide-show/3_1.svg',
        '../slide-show/3_2.svg',
        '../slide-show/3_3.svg',

      ]
    },
    {
      title : 'OSIS/PPSK SMA XAVERIUS 1',
      type : 'Organization',
      description: 'As the Executive Secretary of Field 9 who takes care of technology, my partner and I manage the OSIS/PPSK Instagram and are in charge of making posters for every OSIS/PPSK event. The 2 new events that have been held in my year are the Workshop Inovasi Game and FORXA.',
      images : [
        '../slide-show/4_1.svg',
        '../slide-show/4_2.svg',
        '../slide-show/4_3.svg',
        '../slide-show/4_4.svg',
        '../slide-show/4_5.svg',

      ]
    }
  ];
  
  console.log(activeIdx);
  const prevSlide = () => {
    const isFirstSlide = activeIdx === 0;
    const newIndex = isFirstSlide ? achievements.length - 1 : activeIdx - 1;
    console.log(newIndex)
    setActiveIdx(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = activeIdx === achievements.length-1;
    const newIndex = isLastSlide ? 0 : activeIdx + 1;
    console.log(newIndex)
    setActiveIdx(newIndex);
  };

  const navigateSlide = (toSlide) => {
    return setActiveIdx(toSlide);
  }

  return (
    <>
    <div name="achievement" className=' flex w-full h-fit py-16 px-4 flex-col '> 
      <div className='my-5 flex flex-row sm:px-4 space-x-4 lg:px-36 justify-start'>
          <div className='rounded-sm bg-ungu w-1'></div>
          <h1 className='text-2xl font-bold text-biru'>Experience</h1>
      </div>
      {/* <div className='w-full h-fit sm:inline-flex sm:space-x-2 sm:p-4 sm:overflow-x-scroll  sm:snap-mandatory  sm:self-center sm:snap-x lg:hidden lg:flex-wrap lg:justify-center lg:space-x-0 lg:space-y-5 lg:overflow-visible'>
        {achievements.map((achievement, index) => (
          <CarouselItemIMG2 achievement={achievement} key={index} />
        ))}
      </div> */}
      <div className='flex justify-center overflow-hidden relative group '>
        <div className='lg:flex sm:hidden opacity-0 group-hover:opacity-100 duration-100  h-[500px] w-10 items-center justify-center rounded-md z-10 ' onClick={prevSlide}>
            <BsChevronCompactLeft color='#001220' size={50}/>
          </div>
        <div className='  h-fit sm:flex md:max-w-[70%] sm:w-[90%] sm:overflow-x-scroll lg:overflow-x-hidden sm:snap-mandatory sm:snap-x sm:space-x-2 lg:snap-none
                        transition-transform ease-out duration-200 '>
                          {console.log((activeIdx*100))}
          
            {achievements.map((achievement, index) =>(
              <CarouselItemIMG3 achievement={achievement} key={index} activeIdx={activeIdx}/>
            ) )}
          
        </div>
          <div className='lg:flex opacity-0 group-hover:opacity-100 duration-100 h-[500px] w-10 items-center justify-center rounded-md sm:hidden z-10' onClick={nextSlide}>
            <BsChevronCompactRight color='#001220' size={50}/>
          </div>
      </div>
      {/* Ini buat yang lg ke atas */}
      {/* <div className=' group flex items-center justify-center sm:hidden lg:flex lg:h-full lg:gap-2 '>
        <div className='flex opacity-0 group-hover:opacity-100 duration-100 h-[500px] w-10 items-center justify-center rounded-md ' onClick={prevSlide}>
          <BsChevronCompactLeft color='#001220' size={50}/>
        </div>
          <CarouselItemIMG3 achievement={achievements[activeIdx]}/>
        <div className='flex opacity-0 group-hover:opacity-100 duration-100  h-[500px] w-10 items-center justify-center rounded-md ' onClick={nextSlide}>
          <BsChevronCompactRight color='#001220' size={50}/>
        </div>
      </div> */}
      <div className='lg:flex justify-center p-2 sm:hidden'>
        <ul className='flex'>
          <li onClick={() => navigateSlide(0)} className={`w-3 h-3 m-2 rounded-full bg-biru-light_50  ${activeIdx == 0 ? 'bg-ungu' : 'bg-biru-light'}`} ></li>
          <li  onClick={() => navigateSlide(1)} className={`w-3 h-3 m-2 rounded-full bg-biru-light_50 ${activeIdx == 1 ? 'bg-ungu' : 'bg-biru-light'}`}></li>
          <li  onClick={() => navigateSlide(2)} className={`w-3 h-3 m-2 rounded-full bg-biru-light_50  ${activeIdx == 2 ? 'bg-ungu' : 'bg-biru-light'}`} ></li>
          <li  onClick={() => navigateSlide(3)} className={`w-3 h-3 m-2 rounded-full bg-biru-light_50  ${activeIdx == 3 ? 'bg-ungu' : 'bg-biru-light'}`}></li>
        </ul>
      </div>
    </div>

    </>
  )
}

export default Achievement