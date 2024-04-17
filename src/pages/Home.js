import React, { useEffect, useState } from 'react'

import Nav from '../component/Nav';
import Header from '../component/Header';
import Content from '../component/Content';
import Fotter from '../component/Fotter';
import avata from '../assets/AVATA.jpg'
import { Button,Modal,QRCode,Popover} from "antd"
import {UserOutlined,GithubFilled,FacebookFilled,MailFilled,PhoneFilled} from '@ant-design/icons';
import Aos from 'aos';  
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';

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
      duration: 3000, // Adjust the duration to your preference
    });
  }, []);
  const { darkMode,  } = useDarkMode();
 
    
        
  return (
    
   <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
    
            <Header /> 
            <section></section>
            <div className='  min-h-screen w-full h-auto flex justify-center items-center md:flex-row flex-col'>
              <div
               data-aos="fade-top" 
               className={`
               ${darkMode?"shadow-orange-50":"border-white"}  border-2 shadow-black 
               mx-2 my-2 
                shadow-2xl rounded-3xl p-5 h-[auto]  flex flex-col md:flex-row md:space-y-10 mt-11 `}
               >
                <div className='space-y-11 mt-auto'>
                      <div className='flex flex-col '>
                        <div className='flex flex-row'>
                        <b className='text-sky-600  text-[70px]'>Hello,<b className=''>I am</b></b>
                      </div>
                      <span className='text-4xl animate-pulse '>Vu Huy Hoang</span>
                      <br></br>
                      
                      <span className='text-5xl '>And I'm a<br/>
                      <marquee bgcolor="#FFB4A4" scrollamount="3" loop="3" width="100%" behavior="scroll" className='text-sky-600 font-bold mt-2 '> Frontend Developer</marquee> </span>
                      </div>

                      <div className='space-x-8 flex flex-row '>
                      <Button
                      target="_blank"
                      className='rounded-full hover:bg-violet-600 bg-white hover:animate-none border-2
                      border-black animate-bounce' href='https://github.com/2602hoang' title='Github Me' type='link'
                        icon={<GithubFilled style={{color:'black'}}/>}/>
                      <Button
                      target="_blank"
                      className='rounded-full hover:bg-violet-600 bg-white hover:animate-none border-2 border-black animate-bounce' href='mailto:vuhuyhoangboj@gmail.com' title='Gmail Me' type='link' icon={<MailFilled style={{color:'black'}} />}/>
                      <Button 
                      target="_blank"
                      className='rounded-full hover:bg-violet-600 bg-white hover:animate-none border-2 border-black animate-bounce' href='https://www.facebook.com/VHH26022001' title='FaceBook Me' type='link' icon={<FacebookFilled  style={{color:'black'}}/>}/>
                        <Popover
                      overlayInnerStyle={{
                        padding: 0,
                      }}
                      content={
                      <div>
                        <h1 className='text-center uppercase text-black '>Zalo me!!!</h1>
                      <QRCode value="https://zalo.me/0917789964" title="Zalo Me" bordered={false} /></div>}
                    >
                      <Button
                      target="_blank"
                      className='rounded-full hover:bg-violet-600 bg-white hover:animate-none border-2 border-black animate-bounce' onClick={()=>{
                        
                      }} title='Call Me' type='text' icon={<PhoneFilled   style={{color:'black'}}/>}>
                        091778994
                      </Button>
                        </Popover>

                      
                      
                      
                      </div>
                    
                      <div className='animate-none hover:animate-pulse mx-2 md:mx-0 md:justify-center md:items-center justify-center items-center flex'>               
                        <Button
                        target="_blank"
                        href='https://drive.google.com/file/d/14B1j9y1IUDaneHU0BNiII_kXuBWdsye1/view?usp=sharing' icon={<UserOutlined />} title='CV Vu Huy Hoang' type='default' className=''>View CV me</Button>
                      </div>
                </div>

                <div  className='md:ml-40 rounded-3xl my-10  mb-10 flex md:w-[400px] md:h-auto'>
                <img  className='hover:animate-none animate-float-image w-[400px] h-[400px]  border-2 shadow-black shadow-2xl rounded-full' src={avata}/>
                </div>
              </div>
              
            </div>
            <section></section>
            <section></section>
            <section></section>
            {/* <Nav/> */}
           <Fotter/>
   </div>
  );
}
        

export default Home