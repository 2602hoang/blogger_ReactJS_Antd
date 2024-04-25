import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import avata from '../assets/AVATA2.jpg'
import Fotter from '../component/Fotter'
import { Button, Drawer, Image, Modal } from 'antd'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar'
import { useTranslation } from 'react-i18next'
import Nav from '../component/Nav'



// Import Swiper styles
import 'swiper/css';
import { IdcardFilled } from '@ant-design/icons'
import Silde from '../component/Silde'



function About() {
  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []);
 
  const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleOk = (e) => {
        console.log(e);
        setOpen(false);
    };
    const handleCancel = (e) => {
        console.log(e);
        setOpen(false);
    };

  

  const { t } = useTranslation();
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex overflow-hidden justify-center items-center w-full flex-col ${darkMode ? '' : 'dark'}`}>
      <ProgressBar />
      <Header />
      <section></section>

      <div className='mt-8 min-h-screen w-full h-auto flex justify-center items-center md:flex-row flex-col'>

        <div
          data-aos="flip-right"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={`mx-5 w-auto  rounded-full flex justify-center items-center`}
        >
          <img src={avata} className='
                    shadow-white 
                     drop-shadow-2xl w-[450px] h-[550px] rounded-tl-[200px]
                     rounded-bl-[200px] opacity-100 shadow-2xl '/>
        </div>

        <div data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
          className={`
             shadow-white
             shadow-2xl
             mt-5
             w-auto md:h-[550px]
             h-auto
             md:w-1/2 
             
             flex text-start flex-col my-2 mx-3 md:mr-10  justify-center items-center 
             opacity-100  border-2 p-6 rounded-tr-[200px] rounded-br-[200px] ${darkMode ? 'text-black' : 'text-white'}`}>
          <p>
            {/* I am a student waiting for my diploma, so I can work full-time at the company. */}
            {/* Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications.
                Looking forward to developing, learning to become a full-stack programmer in the future. */}
          </p>
          <b className='text-transparent bg-clip-text
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 my-2 uppercase text-start
                  text-7xl animate-float-image'>{t("About me")}</b>
          <p className={`md:text-2xl text-lg font-mono ${darkMode ? 'text-black' : 'text-white'}`}>

            {t("I'm a frontend developer passionate about crafting visually stunning websites and mobile apps that not only look beautiful but also offer robust functionality. I thrive on creating smooth user experiences, leveraging my creativity to inject a bit of excitement into every project.")}
            {/* {t("I'm a frontend developer who loves to make things look beautiful and working perfectly")}. <br/>
                {t("I'm passionate about making websites that are easy to use and that provide the best user experience possible")}.  <br/>
                {t("I also happen to be a creative person, which I use to inject a little bit of fun into every project")}. */}
          </p>'
          <div className=' mr-auto justify-center items-center '>
            {/* <Button className='btn text-center justify-center items-center p-5'>
                  {t("Read More")}
                </Button> */}
            <button onClick={() => { showModal(); }} class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">{t("Read More")}</span>
            </button>
          </div>
        </div>
      </div>
      <section></section>
      <section></section>
      <section></section>

      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Fotter />
      <Modal  title={<div className='flex justify-center items-center gap-4'> <IdcardFilled style={{color:'black',fontSize:"25px"}}/> {'\t\t\t\t'} About Me   </div>}
                className=' overflow-hidden text-center  h-max  '
                width={ window.innerWidth >= 768 ? "70%":"100%"}
                
                open={open}
                onOk={handleOk}
                onCancel={handleCancel}

                okButtonProps={{
                    disabled: true,
                    hidden: true,
                }}
                cancelButtonProps={{
                    disabled: true,
                    hidden: true,
                }}>
                  <h1 className='text-black'>Image Person</h1>
                  <div className='flex flex-col w-full  bg-black'>
                    
                  <Silde/>
                   
                  </div>


                  <div className='mt-10 flex flex-col '> 
                    <div>
                      <h1>Hello</h1>
                      <h2>I am a student waiting for my diploma, so I can work full-time at the company.
                        Software Engineering major, mainly Front-End programming, user interface design for Website and Mobie applications. 
                        Looking forward to developing, learning to become a full-stack programmer in the future.</h2>
                    </div>
                  </div>
      </Modal>
        </div>
        )
}

        export default About
