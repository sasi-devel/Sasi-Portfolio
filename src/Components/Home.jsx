import { FaWhatsapp } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { VscGithubInverted } from "react-icons/vsc";
import { MdMailOutline } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import sasi from '../assets/sasi.jpg';
import resume from '../assets/Resume.pdf';
export default function Home(){
   
    return <div className="flex flex-col text-center py-10 font-about-font header-bg text-white">
                <div className="about-div py-10">
                    <p className="subname-text">Hey, I'm</p>
                    <h1 className="text-6xl pt-2">S S SASI</h1>
                    <div className="frontendTopic">
                        <h2 className="text-5xl style" data-value="Frontend_Developer...!" >Frontend_Developer...!</h2>
                    </div>
                </div>
                <div className="flex justify-center  pb-5">
                    <div className="image ">
                        <img src={sasi}/>
                    </div>
                </div>
                
                <div className="abt-btn">
                    <button><a href={"https://wa.me/+917339249883?text=Hii! How may I help you..."} > <i><FaWhatsapp className="h-8"/></i>Message</a></button>
                    <button><a href={resume} download='Resume'> <i><FaDownload className="h-8"/></i>Resume</a></button>
                </div>
                <div className=" icons flex justify-center py-10">
                    <a href="https://www.linkedin.com/feed/?trk=hb_signin"><CiLinkedin className="h-5"/></a>
                    <a href="https://www.facebook.com/"><RiFacebookCircleLine className="h-5"/></a>
                    <a href="mailto:sasisankarsasi24@gmail.com"><MdMailOutline className="h-5"/></a>
                    <a href="https://www.instagram.com/accounts/onetap/?next=%2F"><FaInstagram className="h-5"/></a>
                    <a href="https://github.com/"><VscGithubInverted className="h-5"/></a>
                </div>
                
            </div>
}