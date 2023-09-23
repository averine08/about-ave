import React from "react";
import { AiOutlineWhatsApp, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
const Home = () => {
    return(
        <>
        <div className="bg-putih h-screen max-w-full pt-16 flex flex-col ">
            <div className=" h-full p-20 rounded-md flex flex-col">
                <h1 className="pb-10 font-bold text-5xl max-w-[1000px] bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text ">Web Developer Enthusiast who self adapting and always ready to be a lifelong learner</h1>
                <div className="flex flex-row flex-wrap w-full max-w-[1000px] h-fit py-5 justify-start "> 
                    <div className=" flex items-center sm:w-full sm:flex-wrap sm:justify-center sm:space-x-6 sm:space-y-2 sm:border-r-2 md:space-y-2 md:space-x-6 md:w-full lg:w-2/3  lg:justify-normal ">
                        <img src="../src/assets/profile.svg" alt="profile" className="lg:max-h-36 p-1 sm:h-40"/>
                        <p className="leading-2 text-biru max-w-[400px]">
                            Hi! I am Averina Nurdin. Currently I am studying at at Binus University majoring in Computer Science (5<sup>th</sup> Semester). I describe my self as a person who always eager to learn new things. I enjoy design and content creating but at the same time coding is also challenging for me </p>
                    </div>
                    <div className="flex flex-col w-fit sm:w-full sm:items-center sm:p-10 lg:w-fit">
                        <h1 className="text-2xl font-bold">Let`s Connect</h1>
                        <div className="flex sm:w-full space-x-2 justify-center lg:justify-start">
                            <AiOutlineWhatsApp size={35}/>
                            <AiTwotoneMail size={35}/>
                            <AiFillLinkedin size={35}/>

                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        </>
    );
}

export default Home;