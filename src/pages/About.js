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
    <div className={`flex justify-center items-center w-full flex-col ${darkMode ? 'dark' : ''}`}>
         <Header /> 
        <section></section>

        <div className=' min-h-screen w-full h-auto flex justify-center items-center md:flex-row flex-col'>

            <div 
            data-aos="fade-right"
            className={`mx-5 w-auto  rounded-full flex justify-center items-center`}
             >
                    <img src={avata} className='
                    shadow-white 
                     drop-shadow-2xl w-[450px] h-[450px] rounded-tl-[200px]
                     rounded-bl-[200px] opacity-100 shadow-2xl '/>
            </div>

            <div data-aos="fade-left"
             className={`
             shadow-white
             w-auto h-auto
             md:w-1/2
             
             flex text-start flex-col my-2 mx-3 md:mr-10  justify-center items-center 
             opacity-100 shadow-2xl border-2 p-6 rounded-tr-[200px] rounded-br-[200px] ${darkMode ? 'text-white' : 'text-black'}`}>
                <p>
                {/* I am a student waiting for my diploma, so I can work full-time at the company. */}
                {/* Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications.
                Looking forward to developing, learning to become a full-stack programmer in the future. */}
                </p>
                <b className='text-transparent bg-clip-text
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 my-2 uppercase text-start
                  text-7xl animate-float-image'>about me</b>
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