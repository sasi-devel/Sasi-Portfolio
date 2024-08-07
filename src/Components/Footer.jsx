import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import { FaAngleDoubleDown } from "react-icons/fa";
export default function Footer(){
    return <div className="header-bg text-center md:flex justify-evenly">
              <div>
                <h1 className="foot-head">S S SASI</h1>
                <span className="dev">Frontend Developer</span>
              </div>
              <div> 
                 <h1 className="foot-head">Find me here more</h1>
                 <div className="flex justify-center">
                     <FaAngleDoubleDown className="h-8 find-more"/>
                 </div>
                
              </div>
              <div>
                <h1 className="foot-head">Follow</h1>
                <div className=" icons flex justify-center foot-icon">
                    <a><CiLinkedin className="h-5"/></a>
                    <a><RiFacebookCircleLine className="h-5"/></a>
                    <a><MdMailOutline className="h-5"/></a>
                    <a><FaInstagram className="h-5"/></a>
                    <a><VscGithubInverted className="h-5"/></a>
                </div>
              </div>
           </div>
}