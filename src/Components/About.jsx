import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
export default function About(){
    const [showPara,setShowPara] = useState(false);
    const handleClick = ()=>{
        event.preventDefault();
        setShowPara((prevShowPara)=>!prevShowPara);
    }
    return  <div className="about-bg">
                <div className="flex flex-col text-center">
                    <h1 className="topic">About <span>Me</span></h1>
                    <h1 className="text-2xl pt-5">Frontend_Developer</h1>
                </div>
                <div className="para">
                    <p className="text-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vero cupiditate facere corrupti doloremque quod? Nisi amet distinctio molestias commodi atque! Velit a deserunt voluptatem rem consequuntur possimus odit maiores rerum, ullam et eius. Itaque minus ipsa sapiente maxime eum dolor incidunt deserunt doloremque asperiores repellendus. Velit illum aliquid consequuntur?</p>
                </div>
                
                
                <div className="text-center abt-btn py-5">
                    <button onClick={handleClick}>{showPara?<a href="#">Read Less<i><FaChevronUp className=" icon h-8"/></i></a>:<a href="#">Read More<i><FaChevronDown className=" icon h-8"/></i></a>}</button>
                    {showPara&& <div className="para">
                                    <p className="text-color">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente vero cupiditate facere corrupti doloremque quod? Nisi amet distinctio molestias commodi atque! Velit a deserunt voluptatem rem consequuntur possimus odit maiores rerum, ullam et eius. Itaque minus ipsa sapiente maxime eum dolor incidunt deserunt doloremque asperiores repellendus. Velit illum aliquid consequuntur?</p>
                                </div>}
                    
                </div> 
                
            </div>
}


















