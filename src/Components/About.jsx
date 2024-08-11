import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
export default function About(){
    const [showPara,setShowPara] = useState(false);
    const handleClick = ()=>{
        event.preventDefault();
        setShowPara((prevShowPara)=>!prevShowPara);
    }
    return  <div className="about-bg " id='About'>
                <div className="flex flex-col text-center">
                    <h1 className="topic">About <span>Me</span></h1>
                    <h1 className="text-2xl pt-5">Frontend_Developer</h1>
                </div>
                <div className="para">
                    <p className="text-color">I am a passionate frontend developer with a strong interest in React. While I don’t have formal experience in the field, I spend my free time creating websites and honing my skills in React, HTML, CSS, and JavaScript. I enjoy building dynamic and responsive web applications that offer great user experiences. My projects are a way for me to explore new features and deepen my understanding of React. I'm committed to growing my expertise and look forward to taking on more complex challenges in the world of frontend development.</p>
                </div>
                
                
                <div className="text-center abt-btn py-5">
                    <button onClick={handleClick}>{showPara?<a href="#">Read Less<i><FaChevronUp className=" icon h-8"/></i></a>:<a href="#">Read More<i><FaChevronDown className=" icon h-8"/></i></a>}</button>
                    {showPara&& <div className="para">
                                    <p className="text-color">I am currently working as an Analyst at TCS, where I collaborate with software vendors and publishers to manage and optimize software assets. Despite my role in the software industry, my true passion lies in web development. In my free time, I enjoy creating websites and exploring new frontend technologies. This creative outlet allows me to express my interest in coding and build visually appealing, functional websites.</p>
                                </div>}
                    
                </div> 
                
            </div>
}


















