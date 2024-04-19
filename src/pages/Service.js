import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import Fotter from '../component/Fotter';
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"

import { useDarkMode } from '../component/DarkModeProvider';
import { Button, Drawer, Image, List } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import Aos from 'aos';  
import "aos/dist/aos.css"
function Service() {
  useEffect(() => {
    Aos.init({
      duration: 3000, // Adjust the duration to your preference
    });
  }, []);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const [open1, setOpen1] = useState(false);
  const showDrawer1 = () => {
    setOpen1(true);
  };
  const onClose1 = () => {
    setOpen1(false);
  };
  const images = [];
  for (let i = 1; i <= 12; i++) {
    images.push(require(`../assets/Picture${i}.png`));
  }
  const images1 = [];
  for (let i = 13; i <= 17; i++) {
    images1.push(require(`../assets/Picture${i}.png`));
  }
  const imgs = [];
  for (let i = 1; i <= 3; i++) {
    imgs.push(require(`../assets/i${i}.png`));
  }
  const imgs1 = [];
  for (let i = 4; i <= 8; i++) {
    imgs1.push(require(`../assets/i${i}.png`));
  }
  const { darkMode } = useDarkMode();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredItem1, setHoveredItem1] = useState(null);
  const values = [
    "Value 1",
    "Value 2",
    // Thêm các giá trị tương ứng với các phần tử khác nếu cần
  ];
  const values1 = [
    "Value 3",
    "Value 4",
    "Value 5",
    "Value 6",
    // Thêm các giá trị tương ứng với các phần tử khác nếu cần
  ];
  const hrefs = [

    "https://clone-joodo.vercel.app/",
    "https://cattiensa-clone.vercel.app/",
    "https://web-home-demo-js-taiwin.vercel.app/",
    "https://blogger-vhh.vercel.app/",
    // Thêm các href tương ứng với các phần tử khác nếu cần
  ];
  const hrefs1 = [
    showDrawer,
    showDrawer1,


    // Thêm các href tương ứng với các phần tử khác nếu cần
  ];


  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
      <Header />
      <div data-aos="flip-left" className=' mt-7 flex flex-row justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>

        <h1 className='text-transparent bg-clip-text text-5xl
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-center font-bold uppercase'>

          Mobie App + WebSite App</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>

      </div>
      {/* Your other content */}
      <div className='md:mx-72 mx-2 my-5'>
        <div  className="grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-9 justify-center items-center">
          {/* Map over your portfolio items */}
          {[img1, img2,].map((img, index) => (
            <div
              data-aos="flip-down"
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className="h-[350px] shadow-white
              shadow-2xl w-full border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700 relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center'
              }}
            >
              {hoveredItem === index && (
                <div className="w-auto rounded-2xl h-auto absolute bg-sky-300 inset-0 flex justify-center items-center flex-col px-16 bg-gradient-to-t from-opacity-10 to-main-color">
                  <h4 className="text-2xl">Mobie+Website Design</h4>
                  <p className="text-lg my-3">{values[index]}</p>
                  {/* <a target="_blank" href={hrefs1[index]} className="inline-flex justify-center items-center w-14 h-14 bg-text-color rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>

                  </a> */}
                  <div className='flex justify-center mt-auto mb-2'>
                  <Button onClick={() =>

                    hrefs1[index]()

                  }
                  >Detail</Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>




      <div data-aos="flip-right" className='mt-24 flex flex-row justify-center items-center'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
        <h1 className='text-transparent bg-clip-text text-5xl
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-center font-bold uppercase'>Web Design</h1>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </div>
      <div className='md:mx-32 mx-2 my-5'>
        <div  className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-9 justify-center items-center">
          {/* Map over your portfolio items */}
          {[img3, img4, img5, img6].map((img, index) => (
            <div
            data-aos="flip-up"
              key={index}
              onMouseEnter={() => setHoveredItem1(index)}
              onMouseLeave={() => setHoveredItem1(null)}
              className="h-[350px] shadow-white
              shadow-2xl w-full border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-300 relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: '100%',
                backgroundPosition: 'center'
              }}
            >
              {hoveredItem1 === index && (
                <div className="bg-sky-300 rounded-2xl  absolute   inset-0 flex justify-center items-center flex-col px-16 bg-gradient-to-t  ">
                  <h4 className="text-2xl">Website Design</h4>
                  <p className="text-lg my-3">{values1[index]}</p>
                  <div className='flex flex-row justify-center items-center mt-auto'>

                    <Button type='link' target="_blank" href={hrefs[index]} className="flex justify-center
                   items-center w-8 h-8 bg-text-color rounded-full"
                   icon={ <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                 </svg>}
                   >
                      Visit here
                    </Button>
                    
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <Fotter />
      <Drawer className='flex flex-col justify-center items-center'
        title=" FOOD ORDERING APPLICATION FOR DISTRACTED RESTAURANTS "
        width={'100%'} open={open} onClose={onClose}
        placement="left"

      >
        <div className='flex flex-col justify-center items-center'>
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 4,
            }}
            header={
              <div>
                <h2 className='bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Mobie App</h2>
              </div>
            }
            dataSource={images}
            renderItem={(image, index) => (
              <Image key={index} className="px-2" width={200} src={image} />
            )}
          />
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 2,
            }}
            header={
              <div>
                <h2 className='bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
              </div>
            }
            dataSource={images1}
            renderItem={(image, index) => (
              <Image key={index} className="px-2" width={400} height={200} src={image} />
            )}
          />
          <h1 className='text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
          <div className='flex '>
            <span >
              <h4 className='font-medium text-black'>
                Project scale: graduation thesis course<br />
                Team size: 2 people<br />
                My location:(front-end,test-case creation, documentation)<br />
                - Develop a website interface for kitchen staff with ReactJS, a mobie interface for waiters with ReactNative, develop documents, and complete the database with the rest of you.<br />
                Project Information:<br />
                - Staff information, ordering food, closing orders, handling operations to return water when not used up, returning dishes, providing details of dishes to customers, on the mobie application of the waitress.<br />
                - Receive orders, process orders on the website application, CRUD dishes, staff, statistics desk at the website application of the manager.<br />
                – The user interface is implemented using ReactJS and ReactNative.<br />
                - The backend uses GoLang and MySQL and is deployed on VPS.<br />
                Technologies used: HTML / CSS, JavaScript, ReactJS, React Native, GoLang.<br /><br />
              </h4>
            </span>
          </div>

          <h1 className='justify-start text-black font-medium'>Source code at GitHub &emsp;&emsp; </h1>

          <div className='flex flex-row'> <br></br>
            <span className='justify-start text-black font-medium'>Mobie 👉:&emsp;</span>
            <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/mobie_app-ReactNative' />
            <br />
            <span className='justify-start text-black font-medium'>&emsp;&emsp;Website 👉:&emsp;</span>
            <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/WEBAPP-ReactJS-Antd' />
          </div>
        </div>
      </Drawer>
      <Drawer
        className='flex flex-col justify-center items-center'
        title="ZOLA CHAT APP"
        width={'100%'}
        open={open1}
        onClose={onClose1}
        placement="right"
      >
        <div className='flex flex-col justify-center items-center'>
          <List    itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 1,
            }}
            header={
              <div>
                <h2 className='bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
              </div>
            }
            dataSource={imgs1}
            renderItem={(image, index) => (
              <Image key={index} className="px-2" width={300} height={200} src={image} /> )}
          />

          <List itemLayout="vertical"
            size="large"
            className='h-96'
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 1,
            }}
            header={
              <div>
                <h2 className='bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Mobie App</h2>
              </div>
            }
            dataSource={imgs}
            renderItem={(image, index) => (
              <Image key={index} className="px-2 " width={200} src={image} /> )}
          />

          <h1 className='mt-36 text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
          <div className='flex flex-col'>
            <span>
              <h4 className='justify-start text-black font-medium'>
                Project scale: project in schools.<br />
                Team Size: 5 people<br />
                My location:(front-end,test-case creation, documentation)<br />
                -ReactNative mobie interface development, newspaper documentation development.<br />
                Project Information:<br />
                - CRUD user information and chat, CU messages, making video calls.<br />
                – The user interface is implemented using ReactJS and ReactNative with TailwindCSS and Charka UI, real-time connection using socket.io and web has been implemented for Netlify.<br />
                -The backend uses NodeJS and MongoDB and is implemented for Heroku.<br />
                Technologies used: HTML / CSS, JavaScript, ReactJS, React Native, MongoDB.
              </h4>
            </span>
            <div className='flex'>
              <br/>
              <h1 className='justify-start text-black font-medium'>Source code at GitHub:&emsp;</h1>
              
            </div>
            <div className='flex flex-row'>
            <span className='justify-start text-black font-medium'>Mobie &Website 👉:{'\t'}</span>
              <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/zola-gui' />
              </div>
          </div>
        </div>
      </Drawer>

    </div>
  );
}

export default Service;
