import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import avata from '../assets/AVATA2.jpg'
import Fotter from '../component/Fotter'
import { Avatar, Button, Drawer, Image, Modal, Popover, QRCode } from 'antd'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar'
import { useTranslation } from 'react-i18next'
import Nav from '../component/Nav'



// Import Swiper styles
import 'swiper/css';
import { CommentOutlined, FacebookFilled, GithubFilled, GithubOutlined, GoogleOutlined, IdcardFilled, MailFilled, PhoneFilled, UserOutlined } from '@ant-design/icons'
import Silde from '../component/Silde'
import TextArea from 'antd/es/input/TextArea'



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
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const handleSendComment = () => {
      const currentTime = getCurrentTime();
      const newComment = {
        user: {
          avatar: "",
          name: " Anonymous",
          mail: " Anonymous@gmail.com",
        },
        content: comment,
        time: currentTime,
      };
      setComments([newComment, ...comments]);
      setComment('');
    };
  
    const renderComments = () => {
      return comments.map((cmt, index) => (
        <div className='flex-col flex w-full border-2 my-3 p-2 rounded-2xl '>
            <div key={index} className="flex flex-row gap-5 border-b-2 ">
              <div className='mr-auto'>
                <a>
                <Avatar style={{ backgroundColor: '#121212' }} icon={<UserOutlined />} />
                  <span>{cmt.user.name}</span>
                </a>
                
              </div>
              <div className='ml-auto'>
              <span >{cmt.time}</span>
              </div>
            </div>
            
          <b className='text-start mt-5  '><CommentOutlined style={{fontSize:"20px"}} className='mr-4 '/>:{cmt.content}</b>
        </div>
      ));
    };
    
    const getCurrentTime = () => {
      const now = new Date();
      const date = now.getDate();
      const month = now.getMonth() + 1;
      const year = now.getFullYear();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const formattedDateTime =
        (date < 10 ? "0" : "") +
        date +
        "/" +
        (month < 10 ? "0" : "") +
        month +
        "/" +
        year +
        " " +
        (hours < 10 ? "0" : "") +
        hours +
        ":" +
        (minutes < 10 ? "0" : "") +
        minutes;
      return formattedDateTime;
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
      <Modal  title={<div className='flex justify-center items-center gap-4'> 
      <IdcardFilled style={{color:'black',fontSize:"25px"}}/> {'\t\t\t\t'} About Me   </div>}
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
                      <div className=' w-auto justify-center items-center'>
                      <Silde/>
                      </div>
                  </div>


                  <div className='mt-10 flex flex-col '> 
                    <div>
                     
                      <h2 className='text-center '>I am a student who has completed a course in Software Engineering. <br/>
                        I have mainly focused on programming interfaces and designing interfaces for web and mobile applications.<br/>
                         I want to develop and learn to become a full-stack programmer in the future.</h2>
                    </div>
                  </div>
                   <h1 className='text-3xl font-bold text-[#121212]'>Leave a Comment</h1>

                   <div id="conten_post" className='flex  justify-center items-center flex-col'>
                    <h5>Comment</h5>
                      <div id="cmt_input" className='w-1/2 space-y-6'>
                        <TextArea 
                        autoSize={{
                          minRows: 4,
                          maxRows: 10,
                        }}
                        id="cmtArea" placeholder='Comment here' value={comment} onChange={(e) => setComment(e.target.value)} ></TextArea>
                        <Button id="cmtSubmit" onClick={handleSendComment}>Send</Button>
                      </div>
                      <div id="commentWrapper" className='w-full md:w-1/2 mt-5  '>
                      {renderComments()}
                      </div>
                   </div>

                  <h2 className='mt-12'>My social network here 👇</h2>
                  <div className='space-x-8 flex flex-row justify-center items-center mt-5'>
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


      </Modal>
        </div>
        )
}

        export default About
