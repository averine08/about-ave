import  { useState } from "react";
import { Link } from "react-scroll";
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"


const Navbar = () => {

    const NavLinks = () =>{
        return(
            <>
            <Link className="px-5  text-biru  cursor-pointer hover:font-bold  " to="home"smooth={true}  onClick={isMobileNavOpen}>Home</Link>
            <Link className="px-5  text-biru  cursor-pointer hover:font-bold " to="achievement" smooth={true} onClick={isMobileNavOpen}>Achievement</Link>
            <Link className="px-5  text-biru  cursor-pointer hover:font-bold " to="techstack" smooth={true} onClick={isMobileNavOpen}>Techstack</Link>
            <Link className="px-5  text-ungu  cursor-pointer hover:font-bold" to="project" smooth={true} onClick={isMobileNavOpen}>Project</Link>
            </>
        );
    };

    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }
    const isMobileNavOpen = () =>{
        if(isOpen){
            toggleNavbar();
        }
    }
    return(
        <>
        <nav className="bg-putih fixed w-full h-16 px-8 py-5 mx-auto flex justify-between z-10"> 
            <img src="../Logo.svg" alt="Logo" className="w-24 h-full max-[128]"/> 
            <div className="hidden md:flex">
                <NavLinks className="flex flex-wrap" />
            </div>
            <div className="flex items-center md:hidden " onClick={toggleNavbar}>
                    {isOpen ? <AiOutlineClose size={25} color="#243A73" className="flex z-10" /> : <AiOutlineMenu size={25} color="#243A73" className="flex z-10"/> }  
            </div>
            
            <div className={isOpen? "fixed right-0 top-0 w-[50%] h-screen space-y-10 pt-20 flex flex-col z-3  bg-biru-light ease-in-out duration-500 drop-shadow-lg   md:hidden" : "fixed right-[-120%] flex flex-col top-0 h-screen space-y-10 ease-in-out duration-500 md:hidden"}>
                <NavLinks 
                />
            </div>
        </nav>
        </>
    );
}
export default Navbar;
// export {NavLinks};