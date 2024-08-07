
import TicTacToe from '../assets/TicTacToe.jpg';
export default function Projects(){
    return <div className="header-bg">
                <div className=" text-center">
                    <h1 className="topic">My <span>Projects</span></h1>
                </div>
                <div className='project-full-box md:flex justify-between'>
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={TicTacToe}/> 
                        </div>
                        <div>
                            <p className='project-title'>TIC TAC TOE GAME</p>
                            <h1 className='language'>Using JavaScript</h1>
                            <button className='demo-btn'><a href="#">Live Demo</a></button>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={TicTacToe}/> 
                        </div>
                        <div>
                            <p className='project-title'>TIC TAC TOE GAME</p>
                            <h1 className='language'>Using JavaScript</h1>
                            <button className='demo-btn'><a href="#">Live Demo</a></button>
                        </div>
                    </div>
                    <div className='project-box'>
                        <div className='project-img'>
                            <img src={TicTacToe}/> 
                        </div>
                        <div>
                            <p className='project-title'>TIC TAC TOE GAME</p>
                            <h1 className='language'>Using JavaScript</h1>
                            <button className='demo-btn'><a href="#">Live Demo</a></button>
                        </div>
                    </div>
                </div>
           </div>
}