import { useState } from "react"
import { Bars3Icon } from '@heroicons/react/24/solid'
import { XMarkIcon } from '@heroicons/react/24/solid'

export default function Header(){
    const[toggleMenu,setToggleMenu]=useState(false);
    return <header className=" flex justify-between px-5 py-5 text-white header-bg font-bold">
            <a href="#" className="font-bold text-2xl">Sasi Kutty</a>
            <div className="hidden md:block">
                 <ul className="flex ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My Journey</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            {toggleMenu&& <div className="block md:hidden mobile-header header-bg">
                 <ul className="flex flex-col ">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">My Journey</a></li>
                    <li><a href="#">Skills</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>}
            {!toggleMenu&&<button onClick={()=>setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon className="text-white h-8"/></button>}
            {toggleMenu&&<button onClick={()=>setToggleMenu(!toggleMenu)}className="block md:hidden"><XMarkIcon className="text-white h-8"/></button>}
        
    </header>
}