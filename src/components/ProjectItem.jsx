/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { SiFigma} from "react-icons/si";
import { AiFillGithub, AiFillYoutube } from 'react-icons/ai';
import { RxOpenInNewWindow } from "react-icons/rx";

const ProjectItem = ({project, key}) => {
    // console.log(project);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);

    const ChangeDetailStatusTrue = () => {
        setDetailsIsOpen(true);
    };

    const ChangeDetailStatusFalse = () => {
        setDetailsIsOpen(false);
    };

    const ChangeDetailStatus = () => {
        setDetailsIsOpen(!detailsIsOpen);
    };

    const navigateLink = (link) =>{
        // const link = project[type];
        window.open(link , "_blank");
    }
  return (
    <>
        <div className=" flex flex-col relative  rounded-md border-2 border-spacing-10 border-biru-pastel lg:min-h-[450px] sm:min-h-[400px] overflow-hidden sm:w-full md:w-[48%] lg:w-[31%]"
            onMouseOver={() => ChangeDetailStatusTrue()} onMouseLeave={()=>ChangeDetailStatusFalse()} onClick={()=> ChangeDetailStatus()}>
            
                <div
                style={{ backgroundImage: `url(${project.img})` }}
                className="w-full min-h-[70%] bg-cover bg-no-repeat bg-center bg-clip-content duration-300 transform scale-100 lg:hover:scale-110 "
                ></div>
            
            <div className="flex p-4  gap-2 flex-col relative justify-center">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                    <h2 className="font-bold  text-biru-pastel w-fit sm:text-md lg:text-[1.2rem] leading-none ">
                        {project.title}
                    </h2>
                    <p className="text-sm sm:text-sm text-black/50">{project.brief}</p>
                </div>
                <div className="flex gap-2 ">
                    {project.youtube? (
                        <a
                        className="p-2 rounded-full bg-ungu-bright text-putih cursor-pointer duration-200 hover:bg-ungu "
                        
                        >
                        <AiFillYoutube size={20} onClick={()=>navigateLink(project.youtube)} />
                        </a>
                    ): null}
                    {project.figma ? (
                        <a
                        className="p-2 rounded-full bg-ungu-bright text-putih cursor-pointer duration-200 hover:bg-ungu "
                        
                        >
                        <SiFigma size={20} onClick={()=>navigateLink(project.figma)} />
                        </a>
                    ) : null}
                    {project.github ? (
                        <a
                        className="p-2 rounded-full bg-ungu-bright text-putih cursor-pointer duration-200 hover:bg-ungu"
                        
                        >
                        <AiFillGithub size={20} onClick={()=> navigateLink(project.github)} />
                        </a>
                    ) : null}
                    {project.drive ? (
                        <a
                        className="p-2 rounded-full bg-ungu-bright text-putih cursor-pointer duration-200 hover:bg-ungu"
                        
                        >
                        <RxOpenInNewWindow size={20} onClick={()=> navigateLink(project.drive)} />
                        </a>
                    ) : null}
                </div>
            </div>
            <div className="flex gap-1 flex-wrap">
                {project.techstacks.map ((tech) => (
                <a className={`px-3 py-1 bg-biru-light text-biru-pastel text-[0.8rem] rounded-lg
                ${tech == 'FE' || tech =='UI Designer' || tech =='BE'? 'bg-ungu/30 text-ungu': 'bg-biru-light' }`}>
                {tech}
                </a>
                ))}
            </div>

            {/* {project.detailsIsOpen} */}
            </div>
            <div
            className={ 
                ` transition-transform ease-in-out sm:min-h-[30%] lg:h-fit  w-full flex flex-col align-center absolute bottom-0 pt-3 pb-6 px-4 backdrop-blur-md backdrop-brightness-50 bg-ungu/50
                ${detailsIsOpen
                    ? "  translate-y-[0%] duration-500 "
                    : "translate-y-[100%] duration-300"}
            `}>
            <h2 className={`text-lg text-putih font-bold duration-500 opacity-0  ${detailsIsOpen? 'opacity-100 delay-700': 'opacity-0'}`}>{project.title}</h2>
            <p className={`text-md text-putih font-normal duration-500 opacity-0  ${detailsIsOpen? 'opacity-100 delay-700': 'opacity-0'}`}>{project.description}</p>
            </div>
        </div>
    </>
  );
};

export default ProjectItem;
