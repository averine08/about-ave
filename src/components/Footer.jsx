import React from 'react'
import footer1 from  '/wave_footer1.svg'
import footer2 from  '/wave_footer2_2.svg'
import { AiFillLinkedin, AiTwotoneMail, AiOutlineWhatsApp } from "react-icons/ai"

const Footer = () => {

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

  return (
    <div className='relative overflow-hidden'>
        {/* <div style={{ backgroundImage: `url(${footer1})` }} className='w-screen h-fit bg-contain'>Hello</div> */}
    
        <img src={footer1} alt="" className='sm:w-[200%] sm:scale-150  lg:scale-100 lg:w-full' />
        <img src={footer2} alt="" className='sm:w-[200%] sm:scale-150  lg:scale-100 lg:w-full' />
        <div className='sm:bg-biru flex items-center justify-center lg:h-30 sm:flex-col sm:space-y-2 sm:py-10 lg:flex-row lg:py-0 '>
            <div className=' lg:flex-row lg:items-center lg:absolute lg:bg-transparent lg:top-[60%] lg:left-[20%]'>
                <img src="../Logo_white.svg" alt="Logo" className=" w-24 lg:w-30"/> 
                <p className='sm:text-center lg:text-left text-putih text-sm font-thin '>Made with {'\u2764'}</p>
            </div>
            <div className='flex space-x-5 lg:absolute lg:bg-transparent lg:top-[60%] lg:right-[20%] '>
                <AiFillLinkedin size={35} onClick={redirectLinkedIn} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/>
                <AiTwotoneMail size={35} onClick={redirectEmail} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF" />
                <AiOutlineWhatsApp  size={35} onClick={redirectWA} className="cursor-pointer hover:transition-transform hover:scale-125 duration-500 " color="#F7F9FF"/>
            </div>
        </div> 
    </div>

  )
}

export default Footer