/* eslint-disable react/jsx-key */
import React from 'react'
import ProjectItem from './ProjectItem';


const Project = () => {
    // const seeProject = () => {
    //     window.open('https://drive.google.com/file/d/1GCxQEpoTRMi1CJjMpEbqVuY_YJPalarT/view?usp=sharing', '_blank');
    // }
    const projects= [
      {
        title : 'Kzation',
        img : '../projects/Kztation.svg',
        brief : 'Kpop Stuff Store',
        description: 'KpopZtation (Team) is a website that sell Kpop Stuff like album and lightstick. User should login before buying items. User can play the preview of each song in a album ',
        techstacks: ['UI Designer','FE', 'BE','Laravel', 'MySQL', 'Tailwind'],
      },
    {
        title : 'All About Averina',
        img : '../projects/AllAboutAve.svg',
        brief : 'Portofolio',
        description: 'All About Ave (Individual) is my personal website that I made for exercise in learning React JS. I learnt a lot about basic of React , React JS such as component and reactHooks, and how to build a fully responsive website',
        github : 'https://github.com/averine08/about-ave.git',
        techstacks: ['FE', 'React JS', 'Tailwind', 'Vite'],
        figma: '',
    },
    {
      title : 'Adex Legends',
      img : '../projects/AdexLegend.svg',
      brief : 'Game Profile',
      description: 'ADEX LEGEND (Team) website redesigned from the desktop game website, Apex Legends. The website contains agents in games, maps and the latest news about Adex Legend. A team project that is made for Human Computer Interaction Course',
      github : 'https://github.com/averine08/AdexLegends.git',
      techstacks: ['FE', 'UI Designer', 'HTML', 'CSS', 'Javascript'],
      figma : 'https://www.figma.com/file/XLuo21g3Tj17d8HU6Gkm1M/HCIProject_ADEXLegends-(FINAL)?type=design&node-id=0%3A1&mode=design&t=CWR2EWyN0gI1CAVT-1',
  },
  {
    title : 'KpopZtation',
    img : '../projects/KpopZtation.svg',
    brief : 'Kpop Stuff Store',
    description: 'KpopZtation (Team) is a website for Kpopers so they can buy Kpop album by The artist. User can access the website with one of these role : admins, customer, and guest. To enhance user experience, we made cart feature. From this project i learnt a lot about ASP.Net environment and MVC model',
    github : 'https://github.com/averine08/KpopZtations.git',
    techstacks: ['FE', 'BE','ASP.Net C#', 'SQL', 'CSS'],
  },
  {
    title : 'Binus Recycle Apps',
    img : '../projects/BinusRecycleApps.svg',
    brief : 'Apps for Recycling',
    description: 'Binus Recycle Apps (Team) is a mobile application created out of our concern for the unmanaged waste in the Binus Kemanggisan area. To raise Binusian \'s awareness, through Binus Recycle Apps, recyclable waste such as paper, cardboard, glass bottles, and plastic bottles can be exchanged into Community Service Hours',
    github : 'https://github.com/kennethfilberts/binus-recycle-app.git',
    techstacks: ['FE','React Native', 'Typescript', 'SQL', 'Tensorflow'],
    youtube: 'https://youtu.be/QEUJW-dWmQI?si=ZHaT6mLapam29C9z',
  },
  {
    title : 'Hotel Receptionist System',
    img : '../projects/HotelReceptionist.svg',
    brief : 'Java Project',
    description: 'Hotel Receptionist System (Team) is a check-in and check-out system using Java. There are 2 versions of the program, using the console (CLI) and the GUI. To enhance the User Experience, data display is equipped with sorting and filter features. Is made for completing Object Oriented Programming  Course',
    github : 'https://github.com/averine08/HotelReceptionistSystem.git',
    techstacks: ['BE','Java', 'Java Swing'],
    
  },
  {
    title : 'Using Machine Learning for the Prediction of Diabetes with Emphasis on Blood Content',
    img : '../projects/ResearchPaper.png',
    brief : 'Research Paper',
    description: 'is a research which aim to find the most accurate machine learning model for Diabetes Prediction. We are using the LMCH Diabetes Database, also utilizing Pandas and Sklearn library for data preprocessing and model trainning',
    techstacks: [],
    drive: 'https://drive.google.com/drive/folders/1JiP6js0RyFNAP-hD1lf963rp0xXQYsdw?usp=sharing'
    
  },
  ];

  return (
    <div name="project" className=' flex w-full h-fit pt-16 pb-8 px-4 flex-col '>
        <div className='my-5 flex flex-row sm:px-4 space-x-4 lg:px-36 justify-start'>
            <div className='rounded-sm bg-ungu w-1'></div>
            <h1 className='text-2xl font-bold text-biru'>Projects</h1>
        </div>
        <p className='pb-4 sm:px-4 lg:px-36 relative -top-5 text-slate-500'>//Hover or click cards for more detail</p>
          <div className='flex justify-center w-[85%] self-center gap-5 flex-wrap' >
            {projects.map((project, key) => (
              <ProjectItem project={project} key={key}/>
            )
            )}
        {/* <div className='flex w-[80%]  self-center' >
          </div> */}
        </div>
    </div>
  )
}

export default Project;