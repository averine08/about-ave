import React from "react";

const Home = () => {
    return(
        <>
        <div className="bg-putih h-screen max-w-full pt-16 flex flex-col ">
            <div className=" h-full mx-10 my-10 rounded-md flex flex-col">
                <h1 className="py-10 px-20 font-bold text-5xl bg-gradient-to-r from-blue-600 to-violet-600 text-transparent bg-clip-text ">Web Developer Enthusiast who self adapting and always ready to be a lifelong learner</h1>
                <div className="w-full h-full py-10 px-20"> 
                    <div className=" flex flex-row flex-wrap justify-center items-center sm:w-full sm:justify-center sm:space-x-0 md:space-y-2 md:space-x-6 md:w-full lg:space-x-6 lg:w-2/3 lg:justify-normal">
                        <img src="../src/assets/profile.svg" alt="profile" className="max-h-36"/>
                        <p className="leading-2 text-biru max-w-[400px]">
                            Hi! I am Averina Nurdin. Currently I am studying at at Binus University majoring in Computer Science (5<sup>th</sup> Semester). I describe my self as a person who always eager to learn new things. I Enjoy design and content creating but at the same time coding is also challenging  </p>
                    </div>
                    <div>

                    </div>
                </div>

            </div>
            
        </div>
        </>
    );
}

export default Home;