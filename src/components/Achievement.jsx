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
      description : 'Bergabung sebagai Aktivis, saya bertemu banyak tech enthusiast lainnnya. Disini saya belajar banyak mengenai cara kerja atau workflow sebuah organisasi dengan skala yang lebih besar, softskill, dan tentunya hardskill. Saya dipercaya untuk menjadi staff event dan juga MC pada beberapa event tahunan BNCC' ,
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
      description : 'Sebagai Freshmen Leader, saya sangat dilatih untuk adaptif terhadap kondisi yang tidak menentu. Selama 7 hari saya berkolaborasi bersama 4 Freshmen Leader lainnya untuk mendampingi 60+ Freshmen dalam kelas ABN02. ',
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
      description: 'Saya bekerja di bagian Content Creator yang bertugas untuk mempromosikan Binus University melalui content Instagram dan Tiktok dengan target market lulusan SMA yang seda mencari universitas. Selain itu saya juga dipercaya untuk membuat video promosi kolaborasi Binus X Rencanamu',
      images : [
        '../slide-show/3_1.svg',
        '../slide-show/3_2.svg',

      ]
    },
    {
      title : 'OSIS/PPSK SMA XAVERIUS 1',
      type : 'Organization',
      description: 'Sebagai Sekretaris Bidang 9 yang mengurus mengenai teknologi, saya bersama 1 partner saya mengelola instagram OSIS/PPSK dan bertugas membuat poster untuk setiap event OSIS/PPSK. Adapun 2 program kerja baru yang terlaksana di tahun kepengurusan saya yaitu Workshop Inovasi Game dan FORXA',
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
    <h1 className='text-2xl font-bold border-x-4 border-x-ungu p-1 px-4 mb-10 text-biru'>Experiences</h1>
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