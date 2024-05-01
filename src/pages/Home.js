import React, { useEffect, useState } from 'react'

import Nav from '../component/Nav';
import Header from '../component/Header';
import Fotter from '../component/Fotter';
import avata from '../assets/AVATA.png'
import avata1 from '../assets/AVATA1.png'
import { Button, Modal, QRCode, Popover, Tooltip } from "antd"
import { UserOutlined, GithubFilled, FacebookFilled, MailFilled, PhoneFilled } from '@ant-design/icons';
import Aos from 'aos';
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';

function Home() {
  // const [open, setOpen] = useState(false);

  //   const showModal = () => {
  //       setOpen(true);
  //   };
  //   const handleOk = (e) => {
  //       console.log(e);
  //       setOpen(false);
  //   };
  //   const handleCancel = (e) => {
  //       console.log(e);
  //       setOpen(false);
  //   };

  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const { t } = useTranslation();
  const ExampleComponent = () => {
    return (
      <div className='text-orange-400  text-[50px] flex '>
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          t('Hello,'),
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          t('Hi,'),
          1000,
          // 'Welcome',
          // 1000,
          
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
      />
      </div>
    );
  };


  return (

    <div className={`justify-center overflow-hidden items-center flex w-full flex-col ${darkMode ? '' : 'dark'}`}>
      <ProgressBar />
      <Header />
      <section></section>
      <div className='mb-5 min-h-screen  w-full h-auto flex justify-center items-center md:flex-row flex-col'>
        <div
          data-aos="fade-top"
          className={`
               ${darkMode ? "shadow-orange-50" : "border-white"}  border-2 shadow-black 
               mx-40 my-2 border-sky-400
                shadow-2xl rounded-3xl p-5 h-[auto]  flex flex-col md:flex-row md:space-y-10 mt-11 `}
        >


          <div className='space-y-11 mt-auto'>
            <div className='flex flex-col '>
              <div className='flex flex-row'>
              <b className='text-transparent bg-clip-text
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-[70px]'><ExampleComponent/> {t("I am")}</b>
              </div>
              <span className=' text-transparent bg-clip-text font-bold
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-5xl animate-pulse pb-5'>{t("Vu Huy Hoang")}</span>
              <br></br>

              <span className='text-5xl '>{t("And")} {t("I am")} {t("a")}<br />
                <marquee bgcolor="#FFB4A4" scrollamount="3" loop="3" width="100%" behavior="scroll"
                  className='text-sky-600 font-bold mt-2 md:w-[500px] rounded-xl'> {t("Frontend Developer")}</marquee>


              </span>
            </div>

            <div className='space-x-8 flex flex-row '>
              <Popover trigger="hover" content={<b>Github</b>}>
                <Button
                  id="link"
                  target="_blank"
                  className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2
                      border-black animate-bounce' href='https://github.com/2602hoang' title={t('Github me')} type='link'
                  icon={<GithubFilled style={{ color: 'black' }} />} />
              </Popover>
              <Popover trigger="hover" content={<b>Email</b>}>
                <Button
                  id="link"
                  target="_blank"
                  className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce'
                  href='mailto:vuhuyhoangboj@gmail.com' title={t('Gmail me')} type='link' icon={<MailFilled style={{ color: 'black' }} />} />
              </Popover>
              <Popover trigger="hover" content={<b>FaceBook</b>}>
                <Button
                  id="link"
                  target="_blank"
                  className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce'
                  href='https://www.facebook.com/VHH26022001' title={t('Facebook me')} type='link' icon={<FacebookFilled style={{ color: 'black' }} />} />
              </Popover>
              <Popover
                overlayInnerStyle={{
                  padding: 0,
                }}
                content={
                  <div>
                    <h1 className='text-center uppercase text-black '>{t("Zalo me")}!!!</h1>
                    <QRCode value="https://zalo.me/0917789964" title="Zalo Me" bordered={false} /></div>}
              >
                <Button
                  id="link"
                  target="_blank"
                  href='tel:0917789964'
                  className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce' onClick={() => {

                  }} title={t('Call me')} type='text' icon={<PhoneFilled style={{ color: 'black' }} />}>
                  091778994
                </Button>
              </Popover>
              {/* <div
                class={`w-32 h-32 ${darkMode ? '' : 'dark'} group relative rounded-xl flex justify-center items-center overflow-hidden`}
              >
                <div class="w-16 h-16 bottom-2 absolute bg-red-300">
                  <div
                    class="w-16 h-16 absolute bg-neutral-50 duration-500 shadow-2xl [box-shadow:0px_-75px_55px_-30px_#262626] group-hover:[box-shadow:0px_-75px_95px_0px_#FDE047]"
                  >
                    <div class="w-16 h-16 bg-neutral-50 shadow-inner shadow-yellow-200"></div>
                    <div
                      class="w-16 h-16 bg-neutral-50 absolute -bottom-6 rounded-full [transform:_rotateX(80deg)]"
                    ></div>
                    <div
                      class="w-16 h-16 bg-yellow-400 border-4 border-yellow-300 absolute -top-8 rounded-full [transform:_rotateX(80deg)]"
                    ></div>
                  </div>
                  <svg
                    class="group-hover:-skew-x-2 duration-500 absolute rounded-full shadow-yellow-200 -top-8 left-4 fill-yellow-300 w-8 h-8"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path
                      class=""
                      d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z"
                      fill-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </div> */}




            </div>

            <div className=' animate-none hover:animate-pulse mx-2 md:mx-0 md:justify-center
             md:items-center justify-center items-center flex'>
              {/* <Button
                className=' btn hover:animate-pulse bg-yellow-300'
                target="_blank"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/14B1j9y1IUDaneHU0BNiII_kXuBWdsye1/view?usp=sharing');
                  window.location.href = 'https://drive.google.com/uc?export=download&id=14B1j9y1IUDaneHU0BNiII_kXuBWdsye1';
                }}

                icon={<UserOutlined />} title='View&Dowload'  >

                {t("View CV me")}</Button> */}

              {/* <div class=" duration-300  hover:scale-105
              -rotate-0 group  border-sky-900 border-4 
               overflow-hidden rounded-2xl relative h-52 w-72 bg-sky-800 p-5 flex flex-col items-start gap-4">
                <div class="text-gray-50">
        
                  <p class="text-xs">{t("Frontend Developer")}</p>
                </div>

                <button
                  target="_blank"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/14B1j9y1IUDaneHU0BNiII_kXuBWdsye1/view?usp=sharing');
                    window.location.href = 'https://drive.google.com/uc?export=download&id=14B1j9y1IUDaneHU0BNiII_kXuBWdsye1';
                  }}

                  class="
                btn hover:animate-pulse bg-yellow-300
                duration-300 hover:bg-sky-900 border hover:text-gray-50  font-semibold text-sky-800
                 px-3 py-2 flex flex-row items-center gap-3">
                  <Tooltip title={t('View & Dowload')} placement='bottom'>
                    {t("View CV me")}
                  </Tooltip>
                  <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                    <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
                    </path>
                  </svg>

                </button>
                
                

            </div> */}
            <div class=" duration-500  hover:-rotate-0 
              group [transform:rotate3d(1_,-1,_1,_60deg)]  border-sky-900 border-4  overflow-hidden rounded-2xl
               relative h-64 w-80 bg-sky-800 p-5 flex 
               flex-col items-start gap-4">
                  <div class="text-gray-50">
                  
                    <p class="text-xs">{t("Frontend Developer")}</p>
                  </div>
                  <button 
                  target="_blank"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/14B1j9y1IUDaneHU0BNiII_kXuBWdsye1/view?usp=sharing');
                    window.location.href ='https://drive.google.com/uc?export=download&id=14B1j9y1IUDaneHU0BNiII_kXuBWdsye1';
                  }}
                  class="
                  btn hover:animate-pulse
                  duration-300 hover:bg-sky-900 border hover:text-gray-50 bg-gray-50 font-semibold text-sky-800
                  px-3 py-2 flex flex-row items-center gap-3">
                    
                  <Tooltip title={t('View & Dowload')} placement='bottom'>
                    {t("View CV me")}
                  </Tooltip>
                    <svg class="w-6 h-6 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path d="M22.1,77.9a4,4,0,0,1,4-4H73.9a4,4,0,0,1,0,8H26.1A4,4,0,0,1,22.1,77.9ZM35.2,47.2a4,4,0,0,1,5.7,0L46,52.3V22.1a4,4,0,1,1,8,0V52.3l5.1-5.1a4,4,0,0,1,5.7,0,4,4,0,0,1,0,5.6l-12,12a3.9,3.9,0,0,1-5.6,0l-12-12A4,4,0,0,1,35.2,47.2Z" fill-rule="evenodd">
                      </path>
                    </svg>
                  </button>

                  <svg class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path></svg>

                  <svg class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg>


                </div>


              


              </div>
          </div>

          <div className={`md:ml-40  ${darkMode ? '' : 'dark'}  my-10  mb-10 flex md:w-[400px] md:h-auto  `}>
            <img className={`
                
                hover:animate-none animate-float-image w-[400px] h-[600px] 
                ${darkMode ? 'bg-black' : ''}      `}

              src={darkMode ? avata : avata1} />
          </div>
        </div>

      </div>
      <section></section>

      <div
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className='my-11 w-full flex justify-center items-center'>
        <div class={`card  `}>
          <div
            class={`relative border-2 border-sky-400 shadow-2xl ${darkMode ? "shadow-black" : "shadow-white"} w-[300px]   sm:w-[650px] group transition-all duration-700
             aspect-video flex items-center justify-center`}
          >
            <div
              class={`transition-all flex flex-col items-center py-5 justify-start boder-2 duration-300 group-hover:duration-1000 bg-white w-full h-full absolute group-hover:-translate-y-16`}

            >
              <p class="text-xl sm:text-2xl font-semibold text-gray-500 font-serif">
                {t("Thank You")}
              </p>
              <p class="px-10 text-[10px] sm:text-[12px] text-gray-700">
                {t("It's great that you stopped by my blog")}
              </p>
              <p class="font-serif text-[10px] sm:text-[12px text-gray-700">
                {t("Wishing you a fantastic day ahead!")}
              </p>
              {/* <p class="font-sans text-[10px] text-gray-700 pt-5">HoangVu_Dev</p> */}
              <div class="group duration-500 hover:-skew-x-0 skew-x-6 hover:translate-x-2">
                <div class="group-hover:duration-400 relative rounded-2xl  w-[auto] h-10 bg-white text-gray-50 flex flex-col justify-center
                   items-center gap-1 before:-skew-x-12  before:rounded-2xl  before:absolute before:content['']  before:bg-neutral-700
                    before:right-3 before:top-0 before:w-[auto] before:h-10 before:-z-10">
                  {/* <span class=" font-bold text-black">Hoang</span> */}
                  <p class="text-amber-300 text-2xl font-thin">HoangVu_Dev</p>
                </div>
              </div>
            </div>
            <button
              class="seal bg-rose-500 text-red-800 w-10 aspect-square rounded-full 
              z-40 text-[10px] flex items-center justify-center font-semibold [clip-path:polygon(50%_0%,_80%_10%,_100%_35%,_100%_70%,_80%_90%,_50%_100%,_20%_90%,_0%_70%,_0%_35%,_20%_10%)] group-hover:opacity-0 transition-all duration-1000 group-hover:scale-0 group-hover:rotate-180 border-4 border-rose-900"
            >
              HOANG
            </button>
            <div
              class="tp transition-all duration-1000 group-hover:duration-100 bg-neutral-800 absolute group-hover:[clip-path:polygon(50%_0%,_100%_0,_0_0)] w-full h-full [clip-path:polygon(50%_50%,_100%_0,_0_0)]"
            ></div>
            <div
              class="lft transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_0_0,_0_100%)]"
            ></div>
            <div
              class="rgt transition-all duration-700 absolute w-full h-full bg-neutral-800 [clip-path:polygon(50%_50%,_100%_0,_100%_100%)]"
            ></div>
            <div
              class="btm transition-all duration-700 absolute w-full h-full bg-neutral-900 [clip-path:polygon(50%_50%,_100%_100%,_0_100%)]"
            ></div>
          </div>
        </div>



      </div>
      <section></section>
      <section></section>
      {/* <Nav/> */}
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Fotter />
    </div>
  );
}


export default Home
