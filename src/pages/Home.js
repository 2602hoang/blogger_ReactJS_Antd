import React, { useEffect, useState } from 'react'

import Nav from '../component/Nav';
import Header from '../component/Header';
import Fotter from '../component/Fotter';
// import avata from '../assets/AVATA.png'
// import avata1 from '../assets/AVATA1.png'
import { Avatar, Button, Drawer, Form, Image, Input, Modal, Popover, QRCode, Tooltip } from "antd"
import { UserOutlined, GithubFilled, FacebookFilled, MailFilled, PhoneFilled, CommentOutlined, SendOutlined } from '@ant-design/icons';
import Aos from 'aos';
import me5 from "../assets/me5.png";
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar';
import { useTranslation } from 'react-i18next';
import { TypeAnimation } from 'react-type-animation';
import axios from 'axios';


import avata from '../assets/AVATA2.jpg'
import TextArea from 'antd/es/input/TextArea';
import AgeCalculator from '../component/AgeCalculator';






function Home() {
  const { t } = useTranslation();
  const validateMessages = {
    required: ` ${t('is required')}!`,
    types: {
      email: ` ${t('is not a valid email')}!`,
      number: ` ${t('is not a valid number')}!`,
    },

  };
  const [form1] = Form.useForm();
  const [open1, setOpen1] = useState(false);
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
  const handleSendComment = async (values, e) => {
    if (e) e.preventDefault();
    try {
      const formURL = "https://docs.google.com/forms/d/e/1FAIpQLSflhgHoZvom5pzC0aiEDKIguU7k2ABWTWroq1qA8KclPDZrCA/formResponse"; // Google Form URL
      const formData = new FormData();

      // Append form values to formData
      formData.append("entry.1595185453", values.name);
      formData.append("entry.1329299153", values.email);
      formData.append("entry.765171285", values.message);

      // Submit formData to Google Form URL
      await axios.post(formURL, formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      });

      // Reset form fields after successful submission
      // form.resetFields();

      // Show success message to user
      alert(`${t("Comment Success.Thanks U!!!")}`);
      // console.log(formData);
      resetFields(['name', 'email', 'message']);
      handleCancel1();

      getComment();

    }

    catch (error) {
      // form.resetFields();  
      console.error('Error submitting form:', error);
      resetFields(['name', 'email', 'message']);
      handleCancel1();

      getComment();
      alert(`${t("Comment Success.Thanks U!!!")}`);
      // form.resetFields();

    }
  };
  const [loading, setLoading] = useState(false)

  const getComment = async () => {
    setLoading(true);
    try {

      const reponse = await axios.get(`https://script.google.com/macros/s/AKfycbwVTMsw9F1W8bpvD9cTZ0Eodp-TbJwMUyPGTcFyYDUfKAdXoBK76lFiRyCkKtMAHJM/exec`)

      const data = reponse.data;
      setComment(reponse.data.data)
      // console.log("ok",reponse.data.data);
    } catch (error) {
      console.error('Error fetching post:', error);
    }
  }

  const resetFields = (fields) => {
    fields.forEach(field => {
      form1.setFieldsValue({ [field]: undefined });
    });
  };

  const renderComments = () => {
    // Convert the comment object to an array of comments
    const commentsArray = Object.values(comment);

    // Get the last 10 comments
    const lastTenComments = commentsArray.slice(-15);


    // Reverse the order of comments to display the most recent first
    const reversedComments = lastTenComments.reverse();

    return reversedComments.map((cmt, index) => {
      // Format the time
      const formattedTime = new Date(cmt.time).toLocaleString();

      // console.log("ok", typeof cmt);
      return (

        <div className='flex-col flex w-full border-2 my-3 p-2 rounded-2xl snap-y' key={index}>
          <div className="flex flex-row gap-5 border-b-2 snap-normal ">
            <div className='mr-auto'>
              <a >
                <Avatar style={{ backgroundColor: '#121212' }} icon={<UserOutlined />} />
                <span className='ml-2 text-sky-400'>{cmt.name}</span>

              </a>

            </div>
            <div className='ml-auto'>

              <span>{formattedTime}</span>
            </div>
          </div>
          <p className='text-start font-thin text-[10px]'>This  [{cmt.email}]  left a comment 👇👇  </p>
          <b className='text-start mt-5'>{t("Comment")}
            <CommentOutlined style={{ fontSize: "20px" }} className='ml-2' />:
            {"\t\t\t"}{cmt.comment}

          </b>
        </div>

      );
    });
  };

  const showModal1 = () => {
    setOpen1(true);
  };
  const handleOk1 = (e) => {
    console.log(e);
    setOpen1(false);
  };
  const handleCancel1 = (e) => {
    console.log(e);
    setOpen1(false);
  };
  const [comment, setComment] = useState('');

  useEffect(() => {
    getComment();
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, [[comment]]);
  const { darkMode, toggleDarkMode } = useDarkMode();


  const ExampleComponent = () => {
    return (
      <div className='text-orange-400  text-[30px] flex '>
        <TypeAnimation
          sequence={[
            // t("Wellcome"),
            // 2000,
            // Same substring at the start will only be typed out once, initially
            t('Hello,') ,
            500, // wait 1s before replacing "Mice" with "Hamsters"
            t('Hi,'),
            500,
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

    <div className={`snap-y snap-mandatory justify-center overflow-hidden items-center flex w-full flex-col ${darkMode ? '' : 'dark'}`}>
      <ProgressBar />
      <Header />

      <div className='snap-start mb-5 mt-auto md:h-screen  w-full flex justify-center items-center md:flex-row flex-col'>
        <div
          data-aos="fade-top"
          className={`
               ${darkMode ? "shadow-orange-50" : "border-white"}  border-2 shadow-black 
               mx-40 my-2 border-sky-400
                shadow-2xl rounded-3xl p-5 h-[auto]  flex flex-col md:flex-row md:space-y-5 `}
        >


          <div className='space-y-5'>
            <div className='flex flex-col '>
              <div className='flex flex-row'>
                <b className='text-transparent bg-clip-text
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-[50px]'><ExampleComponent /> {t("I am")}</b>
              </div>
              <span className=' text-transparent bg-clip-text font-bold
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-4xl animate-pulse pb-5'>{t("Vu Huy Hoang")}</span>
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




            </div>


          </div>

          <div data-aos="flip-down" className={`  md:ml-40 justify-center items-center  ${darkMode ? '' : 'dark'}  my-10  mb-10 flex md:w-[400px]   `}>
            {/* <img className={`
                
                hover:animate-none animate-float-image w-[400px] h-[600px] 
                ${darkMode ? 'bg-black' : ''}      `}

              
              src={darkMode ? avata : avata1} /> */}
            <div class={`${darkMode ? 'dark' : ''}  group before:hover:scale-95 before:hover:h-72  before:hover:w-80  before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-72 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden`
            }               >
              <div style={{
                backgroundImage: `url(${me5})`,

                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center'
              }}

                class="w-28 h-28  mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"></div>
              <div class="z-10  group-hover:-translate-y-10 transition-all duration-500">
                <span class={`${darkMode ? 'text-white' : ' text-black'} text-2xl font-semibold`}>{t("Frontend Developer")}</span>
                <p class={`text-xs ${darkMode ? 'text-white' : ' text-black'}`}>Vu Huy Hoang</p>
              </div>
              <button
                target="_blank"
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1tWy-tXTZJ1P--EBxUs05ppV_cQfeZ3BN/view?usp=sharing');
                  window.location.href = 'https://drive.google.com/uc?export=download&id=1tWy-tXTZJ1P--EBxUs05ppV_cQfeZ3BN';
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

              {/* <svg class="group-hover:scale-125 duration-500 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-900" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="5"></path></svg>

                  <svg class="group-hover:scale-125 duration-200 absolute -bottom-0.5 -right-20 w-48 h-48 z-10 -my-2  fill-gray-50 stroke-sky-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><path data-name="layer1" d="M 50.4 51 C 40.5 49.1 40 46 40 44 v -1.2 a 18.9 18.9 0 0 0 5.7 -8.8 h 0.1 c 3 0 3.8 -6.3 3.8 -7.3 s 0.1 -4.7 -3 -4.7 C 53 4 30 0 22.3 6 c -5.4 0 -5.9 8 -3.9 16 c -3.1 0 -3 3.8 -3 4.7 s 0.7 7.3 3.8 7.3 c 1 3.6 2.3 6.9 4.7 9 v 1.2 c 0 2 0.5 5 -9.5 6.8 S 2 62 2 62 h 60 a 14.6 14.6 0 0 0 -11.6 -11 z" stroke-miterlimit="10" stroke-width="2"></path></svg> */}
            </div>
          </div>
        </div>

      </div>


      {/* 3 */}
      <div className='md:h-screen  snap-start  w-full flex justify-center items-center mt-16 md:mt-0'
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
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
   

      <h1 className='text-center text-2xl font-bold text-yellow-400 my-6'>{t("Please contribute with your comments")}</h1>
      <div data-aos="flip-down" className='mb-5 snap-start  flex flex-col md:h-screen justify-center items-center  md:mt-auto mx-2'>

        {/* <div data-aos="flip-down" class=" duration-500  hover:-rotate-0 
              group [transform:rotate3d(1_,-1,_1,_60deg)]  border-sky-900 border-4  overflow-hidden rounded-2xl
               relative h-64 w-80 bg-sky-800 p-5 flex 
               flex-col items-start gap-4">
                  <div class="text-gray-50">
                  
                    <p class="text-xs">{t("Frontend Developer")}</p>
                  </div>
                  <button 
                  target="_blank"
                  onClick={() => {
                    window.open('https://drive.google.com/file/d/1tWy-tXTZJ1P--EBxUs05ppV_cQfeZ3BN/view?usp=sharing');
                    window.location.href ='https://drive.google.com/uc?export=download&id=1tWy-tXTZJ1P--EBxUs05ppV_cQfeZ3BN';
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


                </div> */}
        <div id="conten_post" className='flex  justify-center items-center flex-col'>
          {/* < Button className='animate-bounce bg-slate-950' type='link'onClick={showModal1} > Leave your own comment</Button> */}
          <button onClick={showModal1} class="bg-red-300 hover:bg-red-500 text-white animate-bounce 
                  font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all
                   duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
            {t("Leave your own comment")}!!!
          </button>
          <Modal
            className=' overflow-hidden text-center w-1/2  h-max  '
            width={window.innerWidth >= 768 ? "50%" : "100%"}

            open={open1}
            onOk={handleOk1}
            onCancel={handleCancel1}

            okButtonProps={{
              disabled: true,
              hidden: true,
            }}
            cancelButtonProps={{
              disabled: true,
              hidden: true,
            }}
          >
            <div id="cmt_input" className='md:w-full w-full md:space-y-6 items-center flex-col justify-center flex'>
              <h1 className='text-[#99ff33] font-serif text-4xl animate-bounce font-semibold'>{t("Your comment")}</h1>
              <Form form={form1} className='flex w-2/3 flex-col md:mx-0 md:w-[800px] md:px-8 h-auto justify-center items-center'
                validateMessages={validateMessages}
                onFinish={handleSendComment}
                name="nest-messages"
              >
                <div className="w-full md:w-full md:px-4 mb-4">
                  <Form.Item name="name"
                    label={<p className={`${darkMode ? "text-black" : "text-black"}`}>
                      {t("Your Name")}</p>}
                    rules={[{ required: true }]}>
                    <Input prefix={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
                    </svg>

                    } autoSize={{ minRows: 1, maxRows: 2 }} />
                  </Form.Item>
                </div>

                <div className='w-full md:w-full md:pl-[52px] md:pr-4 '>

                  <Form.Item name="email"
                    label={<p className={`${darkMode ? "text-black" : "text-black"}`}>Email</p>} rules={[{ type: 'email', required: true }]}>
                    <Input prefix={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-4 h-4">
                      <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                      <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                    </svg>
                    } />
                  </Form.Item>

                </div>
                <div className='w-full md:w-full md:pl-[110px] md:pr-4 '>
                  <Form.Item name="message" rules={[{ required: true, message: t('Please input your comment!') }]}>


                    <TextArea
                      autoSize={{
                        minRows: 4,
                        maxRows: 10,
                      }}
                      id="cmtArea" name='message' placeholder={t('Comment here')} ></TextArea>
                  </Form.Item>
                </div>
                <Button className='btn  ' onCancel={handleCancel1} type='default' htmlType="submit"
                  icon={<SendOutlined />}>{t("Comment")}</Button>
                <button onClick={()=>{
                   window.location.href = "/eror"; 
                }}
                  class="flex h-[30px] w-[120px] mt-3 items-center justify-center gap-[0.5em] rounded-full bg-[#c60808] px-[2em] py-[1em] text-white shadow-[inset_0px_-4px_4px_0px_#f05b5b,0px_0px_0px_2px_#f9d1d1,0px_4px_0px_0px_#A60000] duration-[250ms] hover:translate-y-[0.25em] active:translate-y-[0.5em] active:shadow-[inset_0px_-4px_4px_0px_#f05b5b,0px_0px_0px_2px_#f9d1d1]"
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-[1.5em] w-[1.5em]"
                  >
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <circle cx="12" cy="12" r="10" stroke="#fff" stroke-width="1.5"></circle>
                      <path
                        d="M9 17C9.85038 16.3697 10.8846 16 12 16C13.1154 16 14.1496 16.3697 15 17"
                        stroke="#fff"
                        stroke-width="1.5"
                        stroke-linecap="round"
                      ></path>
                      <ellipse cx="15" cy="10.5" rx="1" ry="1.5" fill="#fff"></ellipse>
                      <ellipse cx="9" cy="10.5" rx="1" ry="1.5" fill="#fff"></ellipse>
                    </g>
                  </svg>
                  <p class="[text-shadow:0px_1px_1px_0px_#950000]">Delete</p>
                </button>
              </Form>

            </div>

          </Modal>
          <h2>
            {/* Last (10) reviews */}
            (15) {t("Comments")}
          </h2>
          <div id="commentWrapper" className='overflow-y-auto h-[600px]  w-full md:w-1/2 mt-5  '>


            {comment !== undefined ? renderComments() :
              <div>aaaaaa</div>

            }


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
