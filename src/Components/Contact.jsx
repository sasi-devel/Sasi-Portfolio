import React, { useState } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact(){
  
  const[name,setName] = useState('');
  const[email,setEmail] = useState('');
  const[message,setMessage] = useState('');

  const handleSubmit = (e) =>{
    e.preventDefault();

    const serviceId = 'service_y5k1gpm';
    const templateId = 'template_tj7cams';
    const PublicKey = 'Q7H3NGI_mQEeX5LGc';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Sasi Kutty',
      message: message,
    };

    emailjs.send(serviceId,templateId,templateParams,PublicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:',error)
      });
  }

  return <div className='about-bg' id='Contact'>
            <div className=" text-center">
                  <h1 className="topic">Contact <span>Me</span></h1>
            </div>
            <form onSubmit={handleSubmit} className='contact-box'>
              <div className='contact-tab'>
                <input
                  type="text"
                  placeholder='Full Name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className='contact-tab'>
                <input 
                  type="email"
                  placeholder='Email Address'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className='contact-tab'>
                <textarea 
                  cols='30'
                  rows='10'
                  placeholder='Enter Your Message...'
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                >
                </textarea>
              </div>
              <div>
                <button type='submit' className='contact-submit'>Send Message</button>
              </div>
              
              
            </form>
        </div>
}






/* import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
           
export const ContactUS = () => {
    const form = useRef();
            
    const sendEmail = (e) => {
       e.preventDefault();
            
       emailjs
        .sendForm('service_y5k1gpm', 'template_7fllyzh', form.current, {publicKey: 'Q7H3NGI_mQEeX5LGc',})
        .then(
          () => {
            console.log('SUCCESS!');
         },
         (error) => {
             console.log('FAILED...', error.text);
          },
        );
    };
            
    return (
      <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="from_email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
      </form>
    );
  };
 */
/* import React, { useRef } from 'react';

export default function Contact(){
    return <div className="about-bg" id='Contact'>
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
 */
          
           