import React from 'react'

const TechStack = () => {
  return (
    
    <div name="techstack" className='flex w-full h-fit lg:p-20 sm:p-4 gap-2 flex-col'>
      <div className='mb-10 self-start flex flex-row sm:px-4 space-x-4 lg:px-20'>
        <div className='rounded-sm bg-ungu w-1'></div>
        <h1 className='text-2xl font-bold text-biru'>Skills</h1>
      </div>
      <div className='flex  lg:mx-20  gap-2 flex-wrap justify-center'>
        <div className='flex flex-wrap justify-center p-6 lg:w-1/3  sm:w-[90%] sm:p-4  bg-biru-light_50 items-center rounded-md'>
          <h1 className='font-bold text-biru-pastel text-xl w-full text-center pb-4'>Language</h1>
          <div className='flex flex-wrap gap-2 w-[85%] justify-center'>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>C</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Java</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Python</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>C#</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Javascript</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>HTML</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>CSS</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>MySQL</p>
            <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Ms SQL</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-center p-6 lg:w-[30%]  sm:w-[90%] sm:p-4  bg-biru-light_50 items-center rounded-md'>
          <h1 className='font-bold text-biru-pastel text-xl w-full text-center pb-4'>Framework</h1>
          <div className='flex flex-wrap gap-2 w-[85%]'>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>ReactJS</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>ASP.Net</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Laravel</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Tailwind</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Bootstrap</p>
          </div>
        </div>
        <div className='flex flex-wrap justify-center p-6 lg:w-1/3 sm:w-[90%] sm:p-4  bg-biru-light_50 items-center rounded-md'>
          <h1 className='font-bold text-biru-pastel text-xl w-full text-center pb-4'>Tools</h1>
          <div className='flex flex-wrap gap-2 w-[85%]'>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Git</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Github</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Vite</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Figma</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Click Up</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Google Collab</p>
          <p className='py-1 px-2 text-center text-biru-pastel bg-biru-light rounded-md grow'>Postman</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TechStack
        // <div className='flex flex-wrap justify-center p-6 md:w-[70%] sm:w-[90%] sm:p-4  bg-biru-light_50 items-center rounded-md'>
        //     {/* <img src="../tech-stack/c.png" alt="C" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2' title='C Language' /> */}
        //     {/* <img src="../tech-stack/java.png" alt="Java" className='md:max-w-[80px]  sm:max-w-[60px] h-fit p-2' title='Java'/> */}
        //     {/* <img src="../tech-stack/python.png" alt="Python" className='md:max-w-[80px]  sm:max-w-[60px] h-fit p-2' title='Python'/> */}
        //     {/* <img src="../tech-stack/c-sharp.png" alt="Python" className='md:max-w-[80px]  sm:max-w-[60px] h-fit p-2' title='C#' /> */}
        //     {/* <img src="../tech-stack/js.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2' title='Javascript' /> */}
        //     {/* <img src="../tech-stack/html-5.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2' title='HTML'/> */}
        //     {/* <img src="../tech-stack/css-3.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2' title='CSS'/> */}
        //     {/* <img src="../tech-stack/React-icon.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 ' title='React' /> */}
        //     <img src="../tech-stack/vite.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 ' title='Vite'/>
        //     <img src="../tech-stack/git.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 'title='Git' />
        //     <img src="../tech-stack/github.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 ' title='Github'/>
        //     <img src="../tech-stack/figma.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 ' title='Figma'/>

        //     {/* <img src="../tech-stack/ASPNET_.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 ' title='ASP.NEt' /> */}
        //     <img src="../tech-stack/ClickUp.webp" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit  p-2 rounded-full' title='Click Up'/>
        //     <img src="../tech-stack/mysql.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 ' title='MySQL'/>
        //     <img src="../tech-stack/sql-server.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 'title='Ms. SQL' />
        //     {/* <img src="../tech-stack/Laravel.png" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 'title='Ms. SQL' /> */}
        //     <img src="../tech-stack/postman.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 ' title='Postman'/>
        //     {/* <img src="../tech-stack/tailwind.jpg" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 rounded-full' title='Tailwind' /> */}
        //     {/* <img src="../tech-stack/Tensorflow_logo.svg.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 ' /> */}
        //     <img src="../tech-stack/Google_Colaboratory_SVG_Logo.svg.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 'title='Google Collab' />
        //     <img src="../tech-stack/vs2019.png" alt="Python" className='md:max-w-[80px] sm:max-w-[60px] h-fit p-2 ' title='Visual Studio 2019'/>
            

        // </div>