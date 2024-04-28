import React, { useEffect } from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { useDarkMode } from '../component/DarkModeProvider';
import Aos from 'aos';
import "aos/dist/aos.css"
import ProgressBar from '../component/ProgressBar';
import { useTranslation } from 'react-i18next';
import Nav from '../component/Nav';
function Skill() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []);
  const { t } = useTranslation();
  return (


    <div className={`justify-center  overflow-hidden items-center flex w-full flex-col ${darkMode ? '' : 'dark'}`}>


      <ProgressBar />
    
      <div className='  md:mx-32  flex flex-col justify-center items-center'>
        <Header />
        <div className='flexd'>
          <div className='flex h-auto'>
        <span class="my-2  loader"></span>
        </div>
        </div>
        {/* ${darkMode ? "container1" : "container3"}  */}
        <div className={`flex my-8  
        
           justify-center items-center flex-col `}>
      
          <div className='flex md:mx-20 mx-2 '>
            <div className='    mt-8 min-h-screen w-full h-auto flex justify-center items-center  flex-col'>

              <b className=' flex justify-center items-center
                      text-7xl text-transparent bg-clip-text
                      bg-gradient-to-br
                        from-purple-900 via-pink-700 to-yellow-400 
                        text-center animate-pulse uppercase'>{t("SKILLS ABOUT ME")}</b>
              <div className='flex flex-col justify-center items-center'>
                <div data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"

                  className='flex-col flex justify-center items-center'>
                  <h1 className='text-sky-300 text-center font-extrabold mt-12 animate-pulse border-t-2 text-5xl'>{t("Programming Skills")}</h1>
                  <div class="flex-col  flex text-center justify-center items-center   ">
                    <div class="animate-float-image hover:animate-none my-10 mt-28 mx-2 md:flex-row  md:space-y-0 space-y-5  flex-wrap flex-col flex text-center justify-center items-center space-x-2  w-auto">
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >JavaScript</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-red-200 text-red-800 rounded-full">HTML</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-orange-200 text-orange-800 rounded-full">CSS</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-yellow-200 text-yellow-800 rounded-full">ReactJS</div>

                      <div class="text-xl shadow-white shadow-2xl px-3 bg-green-200 text-green-800 rounded-full">ReactNative</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-teal-200 text-teal-800 rounded-full">Antd</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-blue-200 text-blue-800 rounded-full">Tailwindcss</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-purple-200 text-purple-800 rounded-full">Java/C#/C++</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                    </div>
                  </div>
                </div>
                <div data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" className='flex-col flex justify-center items-center'>
                  <h1 className='text-sky-300 mt-12 font-extrabold text-6xl text-center border-t-2 animate-pulse'>{t("Soft Skills")}</h1>
                  <div class=" my-5 flex-col md:flex-row flex text-center justify-center items-center flex-wrap  ">
                    {/* <marquee behavior	="alternate" direction="right"> */}
                    <div class="animate-float-image hover:animate-none my-10 mt-28 space-x-5  md:flex-row md:space-y-0 space-y-5 flex-col flex   text-center
                                                    justify-center items-center   w-auto ">
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >{t("Inquisitive, progressive")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-red-200 text-red-800 rounded-full">{t("Work under pressure")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-orange-200 text-orange-800 rounded-full">{t("Teamwork")}</div>

                      <div class="text-xl shadow-white shadow-2xl px-3 bg-yellow-200 text-yellow-800 rounded-full">{t("Ability to adapt quickly")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-green-200 text-green-800 rounded-full">{t("Quick acquisition")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-teal-200 text-teal-800 rounded-full">{t("Inquisitive, progressive")}</div>
                    </div>
                    {/* </marquee> */}
                  </div>

                </div>
              </div>

            </div>
          </div>
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      <Fotter />


    </div>

  )
}

export default Skill