import React from "react";
import { AiOutlineWhatsApp, AiTwotoneMail, AiFillLinkedin } from "react-icons/ai";
const Home = () => {

    const redirectWA = () => {
            window.open('https://wa.me/+6285268672218', '_blank');
    }

    const redirectLinkedIn = () => {
        window.open('https://www.linkedin.com/in/averina-nurdin/');
    }

    const redirectEmail = () => {
        const email = 'averinanurdin08@gmail.com';
        const mailTo = `mailto:${email}?subject=Subject%20Here&body=Hello%20Averina,`;
        window.open(mailTo, '_blank');
    }

    return(
        <>
        <div className="bg-putih h-screen max-w-full pt-16 block sm:h-fit ">
            <div className=" h-full lg:p-20 rounded-md flex flex-col sm:p-10">
                <h1 className="pb-10 font-bold lg:text-5xl lg:self-center  max-w-[1000px] bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text sm:text-4xl">Web Developer Enthusiast who self adapting and always ready to be a lifelong learner</h1>
                <div className="flex flex-row flex-wrap w-full max-w-[1000px] h-fit py-5 self-center "> 
                    <div className=" flex items-center sm:w-full sm:flex-wrap sm:justify-center sm:space-x-6 sm:space-y-2 sm:border-l-2 md:space-y-2 md:space-x-6 md:w-full md:border-r-2 md:border-l-0 lg:w-2/3  lg:justify-normal ">
                        <img src="../src/assets/profile.svg" alt="profile" className="lg:max-h-36 p-1 sm:h-40"/>
                        <p className="leading-2 text-biru max-w-[400px]">
                            Hi! I am Averina Nurdin. Currently I am studying at at Binus University majoring in Computer Science (5<sup className="position relative z-0">th</sup> Semester). I describe my self as a person who always eager to learn new things. I enjoy design and content creating but at the same time coding is also challenging for me </p>
                    </div>
                    <div className="flex flex-col w-fit space-y-1 sm:w-full sm:items-center sm:p-10 lg:w-fit">
                        <h1 className="text-2xl font-bold">Let`s Connect</h1>
                        <div className="flex sm:w-full space-x-3 justify-center lg:justify-start">
                            <AiFillLinkedin size={35} onClick={redirectLinkedIn} className="cursor-pointer" color="#0072b1"/>
                            <AiTwotoneMail size={35} onClick={redirectEmail} className="cursor-pointer" />
                            <AiOutlineWhatsApp  size={35} onClick={redirectWA} className="cursor-pointer" color="#25D366"/>

                            
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
        </>
    );
}

export default Home;