import React, { useEffect } from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { useDarkMode } from '../component/DarkModeProvider';
import Aos from 'aos';  
import "aos/dist/aos.css"
function Skill() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init({
      duration: 3000, // Adjust the duration to your preference
    });
  }, []);
  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
        <Header/>
        <div className=' flex flex-col text-center   mt-10 min-h-screen'>
          <b className=' 
          text-7xl text-transparent bg-clip-text
           bg-gradient-to-br
            from-purple-900 via-pink-700 to-yellow-400 
            text-center animate-pulse'>SKILLS ABOUT ME</b>
          <div className='flex flex-col'>
            <div data-aos="flip-down">
              <h1 className='font-extrabold mt-12 animate-pulse text-5xl'>Programming Skills</h1>
              <div  class="flex-col  flex text-center justify-center items-center   ">
                                <div class="animate-float-image hover:animate-none my-10 mt-28 mx-2 md:flex-row  md:space-y-0 space-y-5  flex-wrap flex-col flex text-center justify-center items-center space-x-2  w-auto">
                                    <div class="text-3xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                                    <div class="text-3xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >JavaScript</div>
                                    <div class="text-3xl px-3 bg-red-200 text-red-800 rounded-full">HTML</div>
                                    <div class="text-3xl px-3 bg-orange-200 text-orange-800 rounded-full">CSS</div>
                                    <div class="text-3xl px-3 bg-yellow-200 text-yellow-800 rounded-full">ReactJS</div>
                               
                                    <div class="text-3xl px-3 bg-green-200 text-green-800 rounded-full">ReactNative</div>
                                    <div class="text-3xl px-3 bg-teal-200 text-teal-800 rounded-full">Antd</div>
                                    <div class="text-3xl px-3 bg-blue-200 text-blue-800 rounded-full">Tailwindcss</div>
                                    <div class="text-3xl px-3 bg-purple-200 text-purple-800 rounded-full">Java/C#/C++</div>
                                    <div class="text-3xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                                </div>
                </div>
            </div>
            <div data-aos="flip-up">
              <h1 className='mt-12 font-extrabold text-6xl animate-pulse'>Soft Skills</h1>
              <div  class=" my-5 flex-col md:flex-row flex text-center justify-center items-center ">
                                    {/* <marquee behavior	="alternate" direction="right"> */}
                                        <div class="animate-float-image hover:animate-none my-10 mt-28 space-x-5  md:flex-row md:space-y-0 space-y-5 flex-col flex   text-center justify-center items-center   w-auto ">
                                            <div class="text-3xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >Inquisitive, progressive</div>
                                            <div class="text-3xl px-3 bg-red-200 text-red-800 rounded-full">Work under pressure</div>
                                            <div class="text-3xl px-3 bg-orange-200 text-orange-800 rounded-full">Teamwork</div>
                
                                            <div class="text-3xl px-3 bg-yellow-200 text-yellow-800 rounded-full">Ability to adapt quickly</div>
                                            <div class="text-3xl px-3 bg-green-200 text-green-800 rounded-full">Quick acquisition</div>
                                            <div class="text-3xl px-3 bg-teal-200 text-teal-800 rounded-full">Inquisitive, progressive</div>
                                        </div>
                                    {/* </marquee> */}
                                </div>

            </div>
          </div>

        </div>
        <Fotter/>
        </div>
  )
}

export default Skill