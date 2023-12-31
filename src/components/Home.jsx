import React from "react";
import { AiTwotoneMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";
const Home = () => {

    const redirectGithub = () => {
            window.open('https://github.com/averine08', '_blank');
    }

    const redirectLinkedIn = () => {
        window.open('https://www.linkedin.com/in/averina-nurdin/');
    }

    const redirectEmail = () => {
        const email = 'averinanurdin08@gmail.com';
        const mailTo = `mailto:${email}?subject=Greetings&body=Hello%20Averina,`;
        window.open(mailTo, '_blank');
    }

    return(
        
        <div name="home" className="bg-biru h-screen max-w-full pt-16 block sm:h-fit ">
            <img src="../wave-nav.svg" alt=""  className="w-full"/>
            <div className=" h-full lg:px-20 lg:py-10 rounded-md flex flex-col sm:p-10">
                <h1 className="pb-10 font-bold lg:text-5xl lg:self-center  max-w-[1000px] text-putih sm:text-4xl">Web Developement Enthusiast who <span className="bg-gradient-to-r from-cyan-600 to-blue-500 text-transparent bg-clip-text">fast adapting</span> and always ready to <span className="bg-gradient-to-r from-cyan-600 to-blue-500 text-transparent bg-clip-text">explore</span> new techstack</h1>
                <div className="flex flex-row flex-wrap w-full max-w-[1000px] h-fit py-5 self-center "> 
                    <div className=" flex items-center sm:w-full sm:flex-wrap sm:justify-center sm:space-x-6 sm:space-y-2 sm:border-l-2 md:space-y-2 md:space-x-6 md:w-full  md:border-l-0 lg:w-[75%] lg:border-r-2">
                        <img src="../profile.svg" alt="profile" className="lg:max-h-36 p-1 sm:h-40"/>
                        <p className=" text-putih font-normal max-w-[500px]">
                            Hi! I am Averina Nurdin, a computer science student specializing in software engineering who is passionate in application development. High curiosity and a strong sense of learning have led me to various experiences that have shaped me both in hard skills (web development) and soft skills such as communication and teamwork. I am a team initiator who thrives in a collaborative team environment where problem-solving is a shared mission. I value continuous learning and excited to sharpen my skills through real-world cases. </p>
                    </div>
                    <div className="flex flex-col w-fit  sm:w-full sm:items-center sm:p-10 lg:w-fit lg:items-start">
                        <h1 className="text-2xl font-bold text-putih">{"Let's Connect"}</h1>
                        <div className="flex sm:w-full space-x-3 justify-center lg:justify-start ">
                            <AiFillLinkedin size={35} onClick={redirectLinkedIn} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/>
                            <AiTwotoneMail size={35} onClick={redirectEmail} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF" />
                            {/* <AiOutlineWhatsApp  size={35} onClick={redirectWA} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/> */}
                            <AiFillGithub  size={35} onClick={redirectGithub} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/> 
                        </div>
                    
                        <a href="https://drive.google.com/file/d/1ePpE8c3bZxJmHcNwoRrf1g3eZDnRozpI/view?usp=sharing" target="_blank" className="bg-ungu-bright text-putih lg:px-4 lg:py-2 sm:px-6 sm:py-4 rounded-md lg:mt-5 sm:mt-5 hover:bg-ungu duration-200 hover:-translate-y-1 " rel="noreferrer noopenner"
                        > 
                            <div className="flex gap-3 justify-center items-center">
                                Resume 
                                <RxOpenInNewWindow size={18}/>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
            <img src="../wave-haikei.svg" alt=""  className="w-full"/>
            
        </div>
        
    );
}

export default Home;