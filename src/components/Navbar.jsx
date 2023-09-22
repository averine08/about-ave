import React, { useState } from "react";
import { Link } from "react-scroll";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"

const NavLinks = () =>{
    return(
        <>
        <Link className="px-5  text-biru  active:font-bold underline cursor-pointer" to="home">Home</Link>
        <Link className="px-5  text-biru  active:font-bold underline" to="aboutme">About Me</Link>
        <Link className="px-5  text-biru  active:font-bold underline" to="experience">Experience</Link>
        <Link className="px-5  text-ungu  active:font-bold underline" to="project">Contact Me</Link>
        </>
    );
};

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    return(
        <>
        <div className="bg-putih fixed w-full h-16 px-8 py-5 mx-auto flex justify-between drop-shadow-md z-0">
            <img src="../src/assets/Logo.svg" alt="Logo" className="w-24 h-full max-[128]"/> 
            <div className="hidden md:flex">
                <NavLinks className="flex flex-wrap"/>
            </div>
            <div className="flex items-center md:hidden " onClick={toggleNavbar}>
                    {isOpen ? <AiOutlineClose size={25} color="#243A73" className="flex z-10" /> : <AiOutlineMenu size={25} color="#243A73" className="flex z-10"/> }  
            </div>
            <div className={isOpen? "fixed right-0 top-0 w-[40%] h-screen space-y-10 pt-10 flex flex-col z-3  bg-biru-light ease-in-out duration-500 drop-shadow-lg   md:hidden" : "fixed left-[-100%] ease-in-out duration-500 md:hidden"}>
                <NavLinks
                />
            </div>
        </div>
        </>
    );
}
export default Navbar;
export {NavLinks};