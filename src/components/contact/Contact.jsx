import './contact.css';
import React, { useRef, useState } from 'react'
import Phone from '../../img/Phone.png'
import Email from '../../img/Email.png'
import Linkedin from '../../img/Linkedin.png'
import Address from '../../img/Address.png'
import emailjs from 'emailjs-com';
import Twitter from '../../img/Twitter.png'
import Github1 from '../../img/Github1.png'

const Contact = () => {
  const formRef = useRef()
  const [done,setDone] = useState(false);

  // const handleSubmit = (e) =>{
  // e.preventDefault();
  // emailjs.sendForm('service_e0kgeqe', 'template_aoa5lt3', formRef.current, 'EziZXTbrvIDNXi2t-')
  // .then((result) => {
  //     console.log(result.text);
  // }, (error) => {
  //     console.log(error.text);
  // });
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_e0kgeqe', 'template_aoa5lt3', formRef.current, 'EziZXTbrvIDNXi2t-')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='c'>
      <div className='c-bg'></div>
      <div className='c-wrapper'>
        <div className='c-left'>
          <h1 className='c-title'> Let's Get In Touch</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Address} alt="" />
               Indore,India
            </div>

            {/* <div className="c-info-item">
              <img src={Email} alt="" />
              suyogsinnarkar10@gmail.com
            </div> */}

            <a target="_blank" href="https://www.linkedin.com/in/suyog-sinnarkar-37115b204">
            <div className="c-info-item">
              <img src={Linkedin} alt="" />
              LinkedIn
            </div>
            </a>       
              
            <a target="_blank" href="https://github.com/suyog12345/">
            <div className="c-info-item">
              <img src={Github1} alt="" />
              Github
            </div>
            </a> 

            <a target="_blank" href="https://twitter.com/suy0gg?t=9Z97L-COGcEj2i0JmV3YMQ&s=08"> 
            <div className="c-info-item">
              <img src={Twitter} alt="" />
              Twitter
            </div>
            </a>      

          </div>
        </div>
        <div className='c-right'>
          <p className="c-desc">
            <b>What's your story?</b> Always available to get hired!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder='Name' name='user_name'/>
            <input type="text" placeholder='Subject' name='user_subject'/>
            <input type="text" placeholder='Email' name='user_email'/>
            <textarea rows="5" placeholder='Message' name='message'/>
            <button>Submit</button>
            {done && "Thank you..."}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact