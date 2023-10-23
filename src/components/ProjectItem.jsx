/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import React, { useState } from "react";
import { SiFigma} from "react-icons/si";
import {BiSolidDetail} from "react-icons/bi"
import { AiFillGithub, AiFillAlert, AiFillYoutube } from 'react-icons/ai';

const ProjectItem = ({project, key}) => {
    // console.log(project);
    const [detailsIsOpen, setDetailsIsOpen] = useState(false);

    const ChangeDetailStatus = () => {
        setDetailsIsOpen(!detailsIsOpen);
    };
    const navigateLink = (link) =>{
        // const link = project[type];
        window.open(link , "_blank");
    }
  return (
    <>
        <div className=" relative lg:w-[31%] md:w-[40%] rounded-md border-2 border-spacing-10 border-biru-pastel min-h-[450px] overflow-hidden sm:w-full"
            onClick={() => ChangeDetailStatus()}>
            
                <div
                style={{ backgroundImage: `url(${project.img})` }}
                className="w-full min-h-[70%] bg-cover bg-no-repeat bg-center bg-clip-content duration-300 hover:scale-110 "
                ></div>
            
            <div className="flex p-4 gap-2 flex-col relative justify-center">
            <div className="flex justify-between items-start">
                <div className="flex flex-col gap-0">
                    <h2 className="font-bold text-xl text-biru-pastel w-fit">
                        {project.title}
                    </h2>
                    <p className="text-sm">{project.brief}</p>
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
                </div>
            </div>
            <div className="flex gap-1 flex-wrap">
                {project.techstacks.map ((tech) => (
                <a className={`px-3 py-1 bg-biru-light text-biru-pastel text-xs rounded-lg
                ${tech == 'FE' || tech =='UI Designer' || tech =='BE'? 'bg-ungu/50 text-ungu': 'bg-biru-light' }`}>
                {tech}
                </a>
                ))}
            </div>

            {/* {project.detailsIsOpen} */}
            </div>
            <div
            className={ 
                ` transition-transform ease-in-out rounded-b-md duration-300 h-[70%] w-full flex relative z-20 py-1 px-4 backdrop-blur-md backdrop-brightness-50 bg-ungu/50 top-10
                ${detailsIsOpen
                ? " translate-y-[-70%] duration-500 "
                : "translate-y-[0%]  "}
            `}
            >
            <p className={`text-sm text-putih font-normal duration-500 opacity-0  ${detailsIsOpen? 'opacity-100': 'opacity-0'}`}>{project.description}</p>
            </div>
        </div>
    </>
  );
};

export default ProjectItem;
