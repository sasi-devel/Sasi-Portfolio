import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaAngleDoubleDown } from "react-icons/fa";
import { FaAngleDoubleUp } from "react-icons/fa";
import { useState } from "react";
export default function Footer(){
  const[showMore,setShowMore] = useState(false);
  const handleClick = () =>{
    event.preventDefault();
    setShowMore((prevShowMore)=>!prevShowMore);
  }
    return <div >
             <div className="header-bg text-center md:flex justify-evenly">
                <div>
                    <h1 className="foot-head">S S SASI</h1>
                    <span className="dev">Frontend Developer</span>
                  </div>
                  <div> 
                    <h1 className="foot-head">Find here about this project</h1>
                    <div className="flex justify-center">
                        <button onClick={handleClick}>{showMore?<FaAngleDoubleUp className="h-8 find-more"/>:<FaAngleDoubleDown className="h-8 find-more"/>}</button> 
                    </div>
                    
                    
                  </div>
                  <div>
                    <h1 className="foot-head">Follow</h1>
                    <div className=" icons flex justify-center foot-icon">
                        <a href="https://www.linkedin.com/feed/?trk=hb_signin"><CiLinkedin className="h-5"/></a>
                        <a href="https://www.facebook.com/"><RiFacebookCircleLine className="h-5"/></a>
                        <a href="mailto:sasisankarsasi24@gmail.com"><MdMailOutline className="h-5"/></a>
                        <a href="https://www.instagram.com/accounts/onetap/?next=%2F"><FaInstagram className="h-5"/></a>
                        <a href="https://github.com/"><VscGithubInverted className="h-5"/></a>
                    </div>
                  </div>
             </div>
             {showMore&& <div className="about-project text-black">
                                   <div>
                                       <h1>Project Title: Sasi Portfolio</h1>
                                    <div>
                                       <h1>Technologies used</h1>
                                       <div>
                                          <h2>React.js</h2>
                                          <h6>The project is developed using React.js, a popular JavaScript library for building user interfaces, particularly single-page applications.</h6>
                                          <h2>Tailwind CSS</h2>
                                          <h6>For styling, the project leverages Tailwind CSS, a utility-first CSS framework that allows for rapid UI development with a focus on flexibility and customization.</h6>
                                       </div>
                                       <h2>React Icons</h2>
                                       <h6>Icons in the project are sourced from the React Icons library, which provides a wide variety of customizable icons.</h6>
                                    </div>
                                    <div>
                                      <h1>Key Features</h1>
                                      <div>
                                        <h6>Responsive design with Tailwind CSS ensuring compatibility across different devices and screen sizes.</h6>
                                        <h6>Interactive and dynamic UI elements powered by React.js.</h6>
                                        <h6>Iconography handled through React Icons, enhancing the visual appeal and user experience.</h6>
                                      </div>
                                    </div>
                                    <div>
                                      <h1>Objective</h1>
                                      <h6>The goal of this project is to create a well-structured, visually appealing, and user-friendly web application using modern frontend technologies like React.js and Tailwind CSS.</h6>
                                    </div>
                                   </div>
                                </div>}
              
           </div>
}