import React, { useEffect, useState } from 'react'
import Header from '../component/Header'
import avata from '../assets/AVATA2.jpg'
import Fotter from '../component/Fotter'
import { Avatar, Button, Drawer, Form, Image, Input, Modal, Popover, QRCode } from 'antd'
import Aos from 'aos';
import "aos/dist/aos.css"
import { useDarkMode } from '../component/DarkModeProvider';
import ProgressBar from '../component/ProgressBar'
import { useTranslation } from 'react-i18next'
import Nav from '../component/Nav'



// Import Swiper styles
import 'swiper/css';
import { CommentOutlined, FacebookFilled, GithubFilled, GithubOutlined, GoogleOutlined, IdcardFilled, MailFilled, PhoneFilled, SendOutlined, UserOutlined } from '@ant-design/icons'
import Silde from '../component/Silde'
import TextArea from 'antd/es/input/TextArea'

import axios from 'axios'



function About() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []);
 
  // const [loading, setLoading] = useState(false)
  const [check,setCheck] =useState(false);
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
    const [open1, setOpen1] = useState(false);
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
    // const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    // const [comments, setComments] = useState([]);
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
          resetFields(['name','email','message']);
          handleCancel1();
          
          getComment();

      }

      catch (error) {
          // form.resetFields();  
          console.error('Error submitting form:', error);
          resetFields(['name','email','message']);
          handleCancel1();
          
          getComment();
           alert(`${t("Comment Success.Thanks U!!!")}`);
          // form.resetFields();

      }
    };
    useEffect(() => {
      getComment();
      //setLoading(true);
      // getBanIDcontrong();
      // getBanIDsudung();
      
      
  }, []);
    const getComment =async ()=>{
      try {
       
       const reponse = await axios.get(`https://script.googleusercontent.com/macros/echo?user_content_key=Sh0dbG36cqnSuNjX8KlqPFTlLYgafsJ-mo8sHWC63jTZ36vTmbYixrJTuPJUdZMJlBQmctlC0F1m0noclLPkxdHI-Uog9fktm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnJvWH7-NqqPu9xUmUl8VXxLHBg1pWCl25YyAoPEtIwcvpX2HWczp9doKZV7MwLThk2YOL62slGMnCchTin-XhVboARGPSpsE-g&lib=Mzpwhs7tDO-FN3mzLalj4dcTi32_F69pn`)
       const data = reponse.data;
        setComment(reponse.data.data) 
        console.log(reponse.data.data);
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
    const lastTenComments = commentsArray.slice(-10);
  
    // Reverse the order of comments to display the most recent first
    const reversedComments = lastTenComments.reverse();
  
    return reversedComments.map((cmt, index) => {
      // Format the time
      const formattedTime = new Date(cmt.time).toLocaleString();
  
      return (
        
        <div className='flex-col flex w-full border-2 my-3 p-2 rounded-2xl' key={index}>
          <div className="flex flex-row gap-5 border-b-2">
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
          <b className='text-start mt-5'>Comment
            <CommentOutlined style={{ fontSize: "20px" }} className='ml-2' />:
             {"\t\t\t"}{cmt.comment}
          </b>
        </div>
      );
    });
  };
  
  
  
  
    
  
    const validateMessages = {
      required: ` ${t('is required')}!`,
      types: {
          email: ` ${t('is not a valid email')}!`,
          number: ` ${t('is not a valid number')}!`,
      },
     
  };
  


  const { darkMode, toggleDarkMode } = useDarkMode();
  const [form1] = Form.useForm();
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
             opacity-100  border-2 p-6 rounded-tr-[200px] rounded-br-[200px] ${darkMode ? 'text-black' : 'text-black'}`}>
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
                   <h1 className=' text-3xl font-bold text-[#121212] my-6'>Please contribute with your comments</h1>

                   <div id="conten_post" className='flex  justify-center items-center flex-col'>
                  {/* < Button className='animate-bounce bg-slate-950' type='link'onClick={showModal1} > Leave your own comment</Button> */}
                  <button onClick={showModal1} class="bg-red-300 hover:bg-red-500 text-white animate-bounce font-bold py-3 px-6 rounded-full shadow-lg hover:text-white shadow-white transform transition-all duration-500 ease-in-out hover:scale-110 hover:brightness-110 hover:animate-pulse active:animate-bounce">
                  Leave your own comment!!!
</button>
                    <Modal 
                     className=' overflow-hidden text-center w-1/2  h-max  '
                     width={ window.innerWidth >= 768 ? "50%":"100%"}
                     
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
                      <div id="cmt_input" className='md:w-full w-full md:space-y-6 items-center justify-center flex'>

                        <Form form={form1} className='flex w-2/3 flex-col md:mx-0 md:w-[800px] h-auto justify-center items-center'
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
                        <Form.Item name="message" rules={[{ required: true, message: t('Please input your comment!')}]}>
                        
                          
                        <TextArea 
                        autoSize={{
                          minRows: 4,
                          maxRows: 10,
                        }}
                        id="cmtArea" name='message' placeholder='Comment here' ></TextArea>
                        </Form.Item>
                        </div>
                        <Button className='btn  ' onCancel={handleCancel1} type='default'  htmlType="submit" 
                            icon={<SendOutlined />}>Comment</Button>
                        </Form>
                        
                      </div>
                  
                  </Modal>
                      <div id="commentWrapper" className='w-full md:w-1/2 mt-5  '>
                      <h2>Last (10) reviews</h2>
                      
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
