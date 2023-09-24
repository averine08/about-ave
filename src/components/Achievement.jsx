import React, { useState } from 'react'
import CarouselItemIMG from './CarouselItemIMG';

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
      description : 'So fun so fresh',
      images : [
        '../src/assets/slide-show/1_1.jpg',
        '../src/assets/slide-show/1_2.jpg',
        '../src/assets/slide-show/1_3.jpg',
        '../src/assets/slide-show/1_4.jpg',
      ]
    },
    // {
    //   title : 'Binus FYP',
    //   year : '2022',
    //   description : 'Same so fun',
    //   images : [
    //     '../src/assets/slide-show/1_1.jpg',
    //     '../src/assets/slide-show/1_2.jpg',
    //     '../src/assets/slide-show/1_3.jpg',
    //   ]
    // },
    // {
    //   title : 'Team Promotion',
    //   year : '2021-now',
    //   decription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa provident harum commodi, doloribus obcaecati molestias ipsum recusandae iure consequuntur nam eveniet porro temporibus animi minima quas ad aperiam quo adipisci?',
    //   images : [
    //     '../src/assets/slide-show/1_1.jpg',
    //     '../src/assets/slide-show/1_2.jpg',
    //     '../src/assets/slide-show/1_3.jpg',
    //   ]
    // }
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
    <div className='flex w-full h-fit py-16 px-4 '> {/**/}
      <div className='w-full h-fit flex items-center justify-center'>
        {achievements.map((achievement) => (
          <CarouselItemIMG achievement={achievement}/>
        ))}
    </div>
      </div>

      </>
  )
}

export default Achievement