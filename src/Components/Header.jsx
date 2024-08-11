import { useState } from "react";
import { Bars3Icon } from '@heroicons/react/24/solid';
import { XMarkIcon } from '@heroicons/react/24/solid';
import favicon from '../assets/favicon.ico';

export default function Header(){
    const[toggleMenu,setToggleMenu]=useState(false);
    return <header className=" flex justify-between px-5 py-5 text-white header-bg font-bold">
            <div className="flex">
                <img src={favicon} alt="" className="h-[30px]"/> 
                <a href="#" className="font-bold text-2xl pl-5">Sasi Kutty</a> 
            </div>
            
            <nav  className="hidden md:block project-content">
                 <ul className="flex ">
                        <li><a href="#">Home</a></li>
                        <li><a href="#About">About</a></li>
                        <li><a href="#My Journey">My Journey</a></li>
                        <li><a href="#Skills">Skills</a></li>
                        <li><a href="#Projects">Projects</a></li>
                        <li><a href="#Contact">Contact</a></li>
                </ul>
            </nav>
            {toggleMenu&& <div className="block md:hidden mobile-header header-bg project-content">
                 <ul onClick={()=>setToggleMenu(!toggleMenu)} className="flex flex-col ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#My Journey">My Journey</a></li>
                    <li><a href="#Skills">Skills</a></li>
                    <li><a href="#Projects">Projects</a></li>
                    <li><a href="#Contact">Contact</a></li>
                </ul>
            </div>}
            {!toggleMenu&&<button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-8"/></button>}
            {toggleMenu&&<button onClick={()=>setToggleMenu(!toggleMenu)}className="block md:hidden"><XMarkIcon className="text-white h-8"/></button>}
        
    </header>
}