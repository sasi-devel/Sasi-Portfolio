export default function Contact(){
    return <div className="about-bg">
                <div className=" text-center">
                    <h1 className="topic">Contact <span>Me</span></h1>
                </div>
                <div className="contact-box">
                    <div className="contact-tab">
                      <input type="text" placeholder="Full Name"/>
                    </div>
                    <div className="contact-tab">
                      <input type="email" placeholder="Email Address"/>
                    </div>
                    <div className="contact-tab">
                      <textarea name="" id="" placeholder="Enter Your Message"></textarea>
                    </div>
                    <div className="contact-submit">
                        <button type="submit">Send Message</button>
                    </div>
                    
                </div>
           </div>
}