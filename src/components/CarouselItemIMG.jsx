/* eslint-disable react/prop-types */
import React from 'react'
import { useEffect, useState } from 'react';

const CarouselItemIMG = ({achievement}) => {
    console.log(achievement.images);
    // const [activeIndex, setActiveIndex] = useState(0);

    const Image = [achievement.images[0],achievement.images[1],achievement.images[2],achievement.images[3]]
    // const [activeIndex, se]
    const [index, setIndex] = useState(0)
    const [image, setImage] = useState()
    useEffect(()=>{
        setTimeout(() => {
            setIndex((index) => index + 1);
            if(index>=3){
                setIndex(0)
            }
            setImage((Image[index]))
          }, 3000);
    })
    // return(
    //     <div className='w-full'>
    //         <img src={image} alt="" height={300} width={300}/>
    //     </div>
    // )

  return (
    <div className='w-[80%] rounded-md bg-biru-light_50 lg:p-20 sm:p-4 min-w-full '>
        <div className=" flex bg-cover justify-center min-h-[400px] w-fit "  > {/* */}
            <img key={index} src={image} alt={`Image ${index}`} className='sm:w-full md:w-[50%] h-full '/>
        </div>


        <h2>{achievement.title}</h2>
        <p>{achievement.year}</p>
        <p>{achievement.description}</p>
  </div>
  )
}

export default CarouselItemIMG