import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";
export default function Myjourney(){
    const [showPara,setShowPara] = useState(false);
    const handleClick = ()=>{
        event.preventDefault();
        setShowPara((prevShowPara)=>!prevShowPara);
    }
    return <div className="header-bg text-white">
        <div className=" text-center">
            <h1 className="topic">My <span>Journey</span></h1>
        </div>
        <div className="text-center"> 
            <h1 className="text-2xl pt-5 ">Experience</h1>
            <p className="para text-color">Currently I am working as analyst in Cargill project. But I am interesting in create a beautiful website. Whenever I get time I will create a websites</p>
        </div>
        <div className="text-center abt-btn py-5">
                    <button onClick={handleClick}>{showPara?<a href="#">Read Less<i><FaChevronUp className=" icon h-8"/></i></a>:<a href="#">Read More<i><FaChevronDown className=" icon h-8"/></i></a>}</button>
                    {showPara&& <div>
                                    <div className="hidden md:block">
                                        <div className=" flex flex-col justify-center px-20 ">
                                                    <h5 className=" py-10 text-3xl ">Academic Qualification</h5>
                                                    <table >
                                                        <tr>
                                                            <th>COURSE</th>
                                                            <th>INSTITUTE</th>
                                                            <th>UNIVERSITY</th>
                                                            <th>PERCENTAGE</th>
                                                            <th>YOP</th>
                                                        </tr>
                                                        <tbody>
                                                            <tr>
                                                                <td>BE-ECE</td>
                                                                <td>Adhi College of Engineering and Technology</td>
                                                                <td>AU</td>
                                                                <td>88%</td>
                                                                <td>2022</td>
                                                            </tr>
                                                            <tr>
                                                                <td>HSC</td>
                                                                <td>Government Girls Higher Secondary School, R.K.Pet</td>
                                                                <td>State Board</td>
                                                                <td>86%</td>
                                                                <td>2018</td>
                                                            </tr>
                                                            <tr>
                                                                <td>SSLC</td>
                                                                <td>Government Girls Higher Secondary School, R.K.Pet</td>
                                                                <td>State Board</td>
                                                                <td>96%</td>
                                                                <td>2016</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                
                                        </div>
                                        <div className="block md:hidden">
                                            <h5 className=" py-10 text-3xl ">Academic Qualification</h5>
                                            <div> 
                                                <h3>Bachelor of Electronics and Communication Engineering</h3>
                                                <p>2018-2022</p>
                                                <p>Anna University, Chennai</p>
                                            </div>
                                            <div className="py-10"> 
                                                <h3>Higher Secondary School</h3>
                                                <p>2017-2018</p>
                                                <p>Govt.Girls.Hr.Sec.School, R.K.Pet</p>
                                            </div>
                                        </div>
                                        <div >
                                            <h5 className="py-5 text-4xl">Analyst<br/><span className="px-5 text-2xl">(2024 Present)</span></h5>
                                            <p>I am working as anakyst at present meantime time I am learning frontend also</p>
                                        </div>
                                </div>}
                    
                </div> 
    </div>
}