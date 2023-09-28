import React from "react";
import { AiOutlineWhatsApp, AiTwotoneMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
const Home = () => {

    const redirectWA = () => {
            window.open('https://wa.me/+6285268672218', '_blank');
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
            <div className=" h-full lg:p-20 rounded-md flex flex-col sm:p-10">
                <h1 className="pb-10 font-bold lg:text-5xl lg:self-center  max-w-[1000px] text-putih sm:text-4xl">Web Developer Enthusiast who <span className="bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text">fast adapting</span> and always ready to explore new techstack</h1>
                <div className="flex flex-row flex-wrap w-full max-w-[1000px] h-fit py-5 self-center "> 
                    <div className=" flex items-center sm:w-full sm:flex-wrap sm:justify-center sm:space-x-6 sm:space-y-2 sm:border-l-2 md:space-y-2 md:space-x-6 md:w-full  md:border-l-0 lg:w-2/3 lg:border-r-2 ">
                        <img src="../profile.svg" alt="profile" className="lg:max-h-36 p-1 sm:h-40"/>
                        <p className="leading-2 text-putih font-normal max-w-[400px]">
                            {"Hi! I'm Averina Nurdin. Currently I'm studying at at Binus University majoring in Computer Science (5"}<sup className="position relative z-0">th</sup> {" Semester). I describe my self as a person who always eager to learn new things. I enjoy designing UI and content creating ... /I commited myself to pursue my carrer as web developer/ time coding is also challenging for me"} </p>
                    </div>
                    <div className="flex flex-col w-fit space-y-1 sm:w-full sm:items-center sm:p-10 lg:w-fit lg:items-start">
                        <h1 className="text-2xl font-bold text-putih">{"Let's Connect"}</h1>
                        <div className="flex sm:w-full space-x-3 justify-center lg:justify-start">
                            <AiFillLinkedin size={35} onClick={redirectLinkedIn} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/>
                            <AiTwotoneMail size={35} onClick={redirectEmail} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF" />
                            {/* <AiOutlineWhatsApp  size={35} onClick={redirectWA} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/> */}
                            <AiFillGithub  size={35} onClick={redirectWA} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/>

                            
                        </div>
                    </div>
                </div>

            </div>
            <img src="../wave-haikei.svg" alt=""  className="w-full"/>
            
        </div>
        
    );
}

export default Home;