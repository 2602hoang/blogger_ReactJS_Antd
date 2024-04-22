import React, { useEffect, useState } from 'react'

import Nav from '../component/Nav';
import Header from '../component/Header';
import Content from '../component/Content';
import Fotter from '../component/Fotter';
import avata from '../assets/AVATA.png'
import avata1 from '../assets/AVATA1.png'
import { Button,Modal,QRCode,Popover} from "antd"
import {UserOutlined,GithubFilled,FacebookFilled,MailFilled,PhoneFilled} from '@ant-design/icons';
import Aos from 'aos';  
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar';
import { useTranslation } from 'react-i18next';

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
        
  return (
    
   <div className={`justify-center items-center flex w-full flex-col ${darkMode ? '': 'dark'}`}>
     <ProgressBar/>
            <Header /> 
            <section></section>
            <div className='mb-5 min-h-screen  w-full h-auto flex justify-center items-center md:flex-row flex-col'>
              <div
               data-aos="fade-top" 
               className={`
               ${darkMode?"shadow-orange-50":"border-white"}  border-2 shadow-black 
               mx-40 my-2 
                shadow-2xl rounded-3xl p-5 h-[auto]  flex flex-col md:flex-row md:space-y-10 mt-11 `}
               >
                <div className='space-y-11 mt-auto'>
                      <div className='flex flex-col '>
                        <div className='flex flex-row'>
                        <b className='text-sky-600  text-[70px]'>{t("Hello")},<b className=''>{t("I am")}</b></b>
                      </div>
                      <span className=' text-transparent bg-clip-text
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-5xl animate-pulse pb-5'>Vũ Huy Hoàng</span>
                      <br></br>
                      
                      <span className='text-5xl '>{t("And")} {t("I am")} {t("a")}<br/>
                      <marquee bgcolor="#FFB4A4" scrollamount="3" loop="3" width="100%" behavior="scroll" 
                      className='text-sky-600 font-bold mt-2 md:w-[500px]'> {t("Frontend Developer")}</marquee> </span>
                      </div>

                      <div className='space-x-8 flex flex-row '>
                      <Popover  trigger="hover" content={<b>Github</b>}>
                      <Button
                      id="link"
                      target="_blank"
                      className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2
                      border-black animate-bounce' href='https://github.com/2602hoang' title={t('Github me')} type='link'
                        icon={<GithubFilled style={{color:'black'}}/>}/>
                      </Popover>
                      <Popover  trigger="hover" content={<b>Email</b>}>
                      <Button
                      id="link"
                      target="_blank"
                      className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce'
                       href='mailto:vuhuyhoangboj@gmail.com' title={t('Gmail me')} type='link' icon={<MailFilled style={{color:'black'}} />}/>
                      </Popover>
                      <Popover  trigger="hover" content={<b>FaceBook</b>}>
                      <Button 
                      id="link"
                      target="_blank"
                      className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce' 
                      href='https://www.facebook.com/VHH26022001' title={t('Facebook me')} type='link' icon={<FacebookFilled  style={{color:'black'}}/>}/>
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
                      className='rounded-full hover:bg-sky-300 bg-white hover:animate-none border-2 border-black animate-bounce' onClick={()=>{
                        
                      }} title={t('Call me')} type='text' icon={<PhoneFilled   style={{color:'black'}}/>}>
                        091778994
                      </Button>
                        </Popover>

                      
                      
                      
                      </div>
                    
                      <div className=' animate-none hover:animate-pulse mx-2 md:mx-0 md:justify-center md:items-center justify-center items-center flex'>               
                        <Button
                        className=' btn hover:animate-pulse bg-yellow-300'
                        target="_blank"  
                        onClick={() => {
                          window.open('https://drive.google.com/file/d/14B1j9y1IUDaneHU0BNiII_kXuBWdsye1/view?usp=sharing');
                          window.location.href = 'https://drive.google.com/uc?export=download&id=14B1j9y1IUDaneHU0BNiII_kXuBWdsye1';
                        }}
                        
                        icon={<UserOutlined />} title='View&Dowload'  >
                           
                         {t("View CV me")}</Button>
                      </div>
                </div>

                <div  className={`md:ml-40  ${darkMode ? '': 'dark'}  my-10  mb-10 flex md:w-[400px] md:h-auto  `}>
                <img  className={`
                
                hover:animate-none animate-float-image w-[400px] h-[500px] 
                ${darkMode ? 'bg-black' : ''}      `}
                 
                src={darkMode ? avata : avata1} />
                </div>
              </div>
              
            </div>
            <section></section>
            <section></section>
            <section></section>
            {/* <Nav/> */}
            <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
           <Fotter/>
   </div>
  );
}
        

export default Home