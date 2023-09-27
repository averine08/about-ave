import React, { useState } from 'react'
import CarouselItemIMG from './CarouselItemIMG';
import CarouselItemIMG2 from './CarouselItemIMG2';

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

  const [currentIndex, setCurrentIndex] = useState(0);


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
      type : 'Event',
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

      ]
    }
  ];

  // const images_1 = [
  //     '../src/assets/slide-show/1_1.jpg',
  //     '../src/assets/slide-show/1_2.jpg',
  //     '../src/assets/slide-show/1_3.jpg',
  // ];

  // const images_2 = [
  //   '../src/assets/slide-show/1_1.jpg',
  //   '../src/assets/slide-show/1_2.jpg',
  //   '../src/assets/slide-show/1_3.jpg',
  // ];

  // const images_3 = [
  //   '../src/assets/slide-show/1_1.jpg',
  //   '../src/assets/slide-show/1_2.jpg',
  //   '../src/assets/slide-show/1_3.jpg',
  // ]


  // console.log(achivements[0].images[0]);
  // console.log(achivements.);
  // console.log(achivements.image[2]);
  return (
    <>
    <div name="achievement" className=' flex w-full h-fit py-16 px-4 flex-col'> {/**/}
    <div className='my-5 flex flex-row sm:px-4 space-x-4 lg:px-36 justify-start'>
        <div className='rounded-sm bg-ungu w-1'></div>
        <h1 className='text-2xl font-bold text-biru'>Experience</h1>
      </div>
      <div className='w-full h-fit sm:inline-flex sm:space-x-2 sm:p-4 sm:overflow-x-scroll  sm:snap-mandatory  sm:self-center sm:snap-x lg:flex lg:flex-wrap lg:justify-center lg:space-x-0 lg:space-y-5 lg:overflow-visible'>
        {achievements.map((achievement, index) => (
          <CarouselItemIMG2 achievement={achievement} key={index} />
        ))}
      </div>
    </div>

      </>
  )
}

export default Achievement