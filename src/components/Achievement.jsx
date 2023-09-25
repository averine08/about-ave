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
      title : 'BNCC',
      year : '2021-2023',
      description : 'So fun so fresh Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem, porro. ' ,
      images : [
        '../slide-show/1_1.jpg',
        '../slide-show/1_2.jpg',
        '../slide-show/1_3.jpg',
        '../slide-show/1_4.jpg',
      ]
    },
    {
      title : 'Binus FYP',
      year : '2022',
      description : 'Same so fun',
      images : [
        '../slide-show/1_1.jpg',
        '../slide-show/1_2.jpg',
        '../slide-show/1_3.jpg',
        '../slide-show/1_4.jpg',
      ]
    },
    {
      title : 'Team Promotion',
      year : '2021-now',
      description: 'tesss',
      images : [
        '../slide-show/1_1.jpg',
        '../slide-show/1_2.jpg',
        '../slide-show/1_3.jpg',
        '../slide-show/1_4.jpg',
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
    <div className=' w-full h-fit py-16 px-4 '> {/**/}
    <h1 className='text-2xl font-bold border-x-4 border-x-ungu p-1 px-4 mb-10 text-biru'>Experiences</h1>
      <div className='w-full h-fit sm:inline-flex sm:space-x-2 sm:p-4 lg:block lg:space-x-0 lg:space-y-5  sm:overflow-scroll lg:overflow-clip'>
        {achievements.map((achievement, index) => (
          <CarouselItemIMG2 achievement={achievement} key={index}/>
        ))}
    </div>
      </div>

      </>
  )
}

export default Achievement