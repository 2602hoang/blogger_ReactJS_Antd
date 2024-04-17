import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import avata from '../assets/AVATA.jpg'
import Fotter from '../component/Fotter'
import { Button } from 'antd'
import Aos from 'aos';  
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
function About() {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Adjust the duration to your preference
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
         <Header /> 
        <section></section>

        <div  className='my-5 md:flex-row min-h-screen flex-col container flex justify-center items-center md:mx-20'>
            <div 
            data-aos="fade-right"
            className={`  w-full rounded-full flex justify-center items-center`}
             >
                    <img src={avata} className='mx-5 drop-shadow-2xl w-[450px] h-[450px] rounded-tl-full rounded-bl-full opacity-100 shadow-2xl '/>
            </div>

            <div data-aos="fade-left"
             className={`
             
             flex text-start flex-col mx-3 md:mr-3 my-auto justify-center items-center 
             opacity-100 shadow-2xl border-2 p-6 rounded-tr-full rounded-br-full ${darkMode ? 'text-white' : 'text-black'}`}>
                <p>
                {/* I am a student waiting for my diploma, so I can work full-time at the company. */}
                {/* Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications.
                Looking forward to developing, learning to become a full-stack programmer in the future. */}
                </p>
                <b className='text-transparent bg-clip-text bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 my-2 uppercase text-start text-7xl'>about me</b>
                <p className={`md:text-2xl text-lg font-mono ${darkMode ? 'text-white' : 'text-black'}`}>
                I'm a frontend developer who loves to make things look beautiful and working perfectly. <br/>
                I'm passionate about making websites that are easy to use and that provide the best user experience possible.  <br/>
                I also happen to be a creative person, which I use to inject a little bit of fun into<br/> every project.
                </p>'
                <div className='mr-auto'>
                <Button className=''>
                  Read More
                </Button>
                </div>
            </div>
        </div>  
        <section></section>
        <section></section>
        <section></section>

        <Fotter/>      
    </div>
  )
}

export default About