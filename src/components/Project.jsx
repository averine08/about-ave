import React from 'react'


const Project = () => {
    const seeProject = () => {
        window.open('https://drive.google.com/file/d/1GCxQEpoTRMi1CJjMpEbqVuY_YJPalarT/view?usp=sharing', '_blank');
    }

  return (
    <div name="project" className=' flex w-full h-fit pt-16 pb-8 px-4 flex-col min-h-[300px] '>
        <div className='my-5 flex flex-row sm:px-4 space-x-4 lg:px-36 justify-start'>
            <div className='rounded-sm bg-ungu w-1'></div>
            <h1 className='text-2xl font-bold text-biru'>Projects</h1>
        </div>
        <a onClick={seeProject} className='cursor-pointer self-center px-4 py-2 bg-[#BE5079] text-putih rounded-md hover:transition-transform hover:scale-105 hover:shadow-lg duration-500 '>See More Projects</a>
    </div>
  )
}

export default Project