import React, { useState } from 'react';
import gin from '../asset/gin.png';
import data from "../asset/data"
import user from '../asset/userTest.png';
import logo from '../asset/AAA.png';
import hoasen from '../asset/hình-nen.png';

import Jadoo from '../asset/Logo.png'
import hotpot from '../asset/hotpot.png'
import chat from '../asset/chat.png'
import { Button, Card, Carousel, Drawer, Image, List } from 'antd';

import { GithubOutlined, InfoCircleFilled, LaptopOutlined, MobileOutlined, PlusOutlined } from '@ant-design/icons';

export default function Project() {
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
    const [open2, setOpen2] = useState(false);
    const showDrawer2 = () => {
        setOpen2(true);
    };
    const onClose2 = () => {
        setOpen2(false);
    };
    const [open3, setOpen3] = useState(false);
    const showDrawer3 = () => {
        setOpen3(true);
    };
    const onClose3 = () => {
        setOpen3(false);
    };
    const [open4, setOpen4] = useState(false);
    const showDrawer4 = () => {
        setOpen4(true);
    };
    const onClose4 = () => {
        setOpen4(false);
    };
    const onChange = (currentSlide) => {
        console.log(currentSlide);
    };
    const images = [];
    for (let i = 1; i <= 12; i++) {
        images.push(require(`../asset/Picture${i}.png`));
    }
    const images1 = [];
    for (let i = 13; i <= 17; i++) {
        images1.push(require(`../asset/Picture${i}.png`));
    }
    const imgs = [];
    for (let i = 1; i <= 3; i++) {
        imgs.push(require(`../asset/${i}.png`));
    }
    const imgs1 = [];
    for (let i = 3; i <= 8; i++) {
        imgs1.push(require(`../asset/${i}.png`));
    }
    const img = [];
    for (let i = 1; i <= 7; i++) {
        img.push(require(`../asset/a${i}.png`));
    }

    return (
        <section  className=" self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[42px] box-border max-w-full text-center text-9xl text-neutral-d-grey font-body-regular-body-3">
            <div className="flex-1 h-90  flex flex-row items-start justify-between py-0 px-36 box-border max-w-full gap-[20px] mq825:pl-[72px] mq825:pr-[72px] mq825:box-border mq1400:flex-wrap mq450:pl-5 mq450:pr-5 mq450:box-border">
                {/* <div className=" flex flex-col items-start justify-start pt-2.5 px-0 pb-0 box-border"> */}

                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    <Button type='link' className='animate-pulse' icon={<InfoCircleFilled />} onClick={showDrawer} title='Project information '>Project information</Button>
                    <div className="self-stretch flex flex-row items-start justify-center py-0 px-5">

                        <div className="w-[65px] flex flex-row items-start justify-start">
                            <div className="h-14 flex-1 relative">
                                <div className="absolute  rounded-tl-lg rounded-tr-8xs rounded-br-3xs rounded-bl-8xs w-[50px] h-[49px] [transform:_rotate(-180deg)] [transform-origin:0_0]" />
                                <img
                                    className="absolute bg-white top-[0px] left-[0px] w-15 h-15 z-[1]"
                                    alt=""
                                    src={hotpot}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <h2 className=" m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                            FOOD ORDERING APPLICATION FOR DISTRACTED RESTAURANTS
                        </h2>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2 text-sm text-neutral-grey">
                            <div className="inset-x-0 bottom-0 flex-1 relative leading-[20px]">
                            <MobileOutlined title='Mobie App' style={{fontSize:'50px'}} />
                            <PlusOutlined style={{fontSize:'25px'}}/>
                            <LaptopOutlined title='Website App' style={{fontSize:'50px'}} />
                            </div>

                        </div>
                    </div>

                </div>


                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    <Button type='link' icon={<InfoCircleFilled />} className='animate-pulse' onClick={showDrawer1} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img className="h-14 w-[65px] relative" alt="" src={chat} />
                    </div>

                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <h2 className=" m-0 self-stretch relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                            ZOLA CHAT APP
                        </h2>
                        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[13px] pl-[13.5px] text-sm text-neutral-grey">
                            <div className="mt-20 flex-1 relative leading-[20px]">
                            <MobileOutlined title='Mobie App' style={{fontSize:'50px'}} />
                            <PlusOutlined style={{fontSize:'25px'}}/>
                            <LaptopOutlined title='Website App' style={{fontSize:'50px'}} />
                            </div>
                        </div>

                    </div>
                </div>

                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    {/* <div className="self-stretch rounded-lg  shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 gap-[16px]"> */}
                    <Button type='link' icon={<InfoCircleFilled />} className='animate-pulse' onClick={showDrawer2} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img
                            className="h-14 w-[65px] relative"
                            alt=""
                            src={logo}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                            <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                PERSONAL BLOG
                            </h2>
                        </div>
                        <div className="self-stretch relative mt-20 text-sm leading-[20px] text-neutral-grey">
                        <LaptopOutlined title='Website App' style={{fontSize:'50px'}} twoToneColor="#33FF33" />
                        </div>
                    </div>
                 
                </div>
                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    {/* <div className="self-stretch rounded-lg  shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 gap-[16px]"> */}
                    <Button type='link' icon={<InfoCircleFilled />} className='animate-pulse' onClick={showDrawer3} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img
                            className="h-14 w-[65px] relative"
                            alt=""
                            src={hoasen}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                            <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                CAT TIEN SA CLONE
                            </h2>
                        </div>
                        <div className="self-stretch relative mt-20 text-sm leading-[20px] text-neutral-grey">
                        <LaptopOutlined title='Website App' style={{fontSize:'50px'}} twoToneColor="#33FF33" />
                        </div>
                    </div>
                 
                </div>
                <div className=" w-[299px] self-stretch rounded-lg h-90  bg-orange-300 shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 px-4 gap-[16px]">
                    {/* <div className="self-stretch rounded-lg  shadow-[0px_2px_4px_rgba(171,_190,_209,_0.2)] flex flex-col items-start justify-start py-6 gap-[16px]"> */}
                    <Button type='link' icon={<InfoCircleFilled />} className='animate-pulse' onClick={showDrawer4} title='Project information '>Project information</Button>
                    <div className="self-stretch h-14 flex flex-row items-start justify-center py-0 px-5 box-border">
                        <img
                            className="h-14 w-[65px] relative"
                            alt=""
                            src={Jadoo}
                        />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                        <div className="self-stretch flex flex-row items-start justify-start py-0 px-2.5">
                            <h2 className="m-0 flex-1 relative text-inherit leading-[36px] font-bold font-inherit mq450:text-3xl mq450:leading-[29px]">
                                JADOO CLONE
                            </h2>
                        </div>
                        <div className="self-stretch relative mt-20 text-sm leading-[20px] text-neutral-grey">
                        <LaptopOutlined title='Website App' style={{fontSize:'50px'}} twoToneColor="#33FF33" />
                        </div>
                    </div>
                 
                </div>
                
                
            </div>
            <Drawer id='#1' title=" FOOD ORDERING APPLICATION FOR DISTRACTED RESTAURANTS " width={900} open={open} onClose={onClose}
                placement="left"

            >
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
                    </h4> </span>
                <h1 className='justify-start text-black font-medium'>Source code at GitHub:</h1>
                <span className='justify-start text-black font-medium'>Mobie 👉:{'\t'}</span>
                <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/mobie_app-ReactNative' />
                <br />
                <span className='justify-start text-black font-medium'>Website 👉:{'\t'}</span>
                <Button type='link'className='animate-bounce'  icon={<GithubOutlined />} href='https://github.com/2602hoang/WEBAPP-ReactJS-Antd' />

            </Drawer>
            <Drawer id='#2' title="ZOLA CHAT APP" width={900} height={700} open={open1} onClose={onClose1}
                placement="right"

            >
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
                            <h2 className='w-[600px] bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
                        </div>
                    }
                    dataSource={imgs1}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2" width={300} height={200} src={image} />
                    )}
                />
               
                <List
                    itemLayout="vertical"
                    size="large"
                    className='h-96'
                    pagination={{
                        onChange: (page) => {
                            console.log(page);
                        },
                        pageSize: 4,
                    }}
                    header={
                        <div>
                            <h2 className='w-[600px] bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Mobie App</h2>
                        </div>
                    }
                    dataSource={imgs}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2 " width={200}  src={image}
                        
                        />
                    )}
                />
               
                
                <h1 className='mt-20 text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
                <span >
                    <h4 className='justify-start text-black font-medium'>
                    Project scale: project in schools.<br/>
                    Team Size: 5 people<br/>
                    My location:(front-end,test-case creation, documentation)<br/>
                    -ReactNative mobie interface development, newspaper documentation development.<br/>
                    Project Information:<br/>
                    - CRUD user information and chat, CU messages, making video calls.<br/>
                    – The user interface is implemented using ReactJS and ReactNative with TailwindCSS and Charka UI, real-time connection using socket.io and web has been implemented for Netlify.<br/>
                    -The backend uses NodeJS and MongoDB and is implemented for Heroku.<br/>    
                    Technologies used: HTML / CSS, JavaScript, ReactJS, React Native, MongoDB.
                    </h4>
                </span>
                <h1 className='justify-start text-black font-medium'>Source code at GitHub:</h1>
                <span className='justify-start text-black font-medium'>Mobie &Website 👉:{'\t'}</span>
                <Button type='link'className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/zola-gui' />
                <br />
                
            </Drawer>
            <Drawer title="PERSONAL BLOG" width={900} open={open2} onClose={onClose2}
                placement="right"

            >
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
                            <h2 className='w-[600px] bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
                        </div>
                    }
                    dataSource={img}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2" width={600} height={400} src={image} />
                    )}
                />
              
                 <h1 className='text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
                <span >
                    <h4 className='justify-start text-black font-medium'>
                    Project scale: Individual.<br/>
                    Team Size: 1 people<br/>
                    My location:(front-end + deploy)<br/>
                    -Develop a personal blog that introduces yourself.<br/>
                    Project Information:<br/>
                    -Website development designed according to the basic website interface of the homepage.<br/>
                    -Develop a personal blog website including CV and programming skills advantages.<br/>
                    link clone:  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='https://web-home-demo-js-taiwin.vercel.app/'>https://web-home-demo-js-taiwin.vercel.app/</a><br/>
                    Technologies used: HTML / CSS, JavaScript, ReactJS,TaiwindCss ,AntDesign.
                    </h4>
                </span>
                <h1 className='justify-start text-black font-medium'>Source code at GitHub:</h1>
                <span className='justify-start text-black font-medium'>Website 👉:{'\t'}</span>
                <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/web_home_demo_JS-taiwin' />
                <br />
            </Drawer>
            <Drawer title="CATTIENSA_CLONE" width={900} open={open3} onClose={onClose3}
                placement="right"

            >
                 {/* <List
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
                            <h2 className='w-[600px] bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
                        </div>
                    }
                    dataSource={img}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2" width={600} height={400} src={image} />
                    )}
                /> */}
              
                 <h1 className='text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
                <span >
                    <h4 className='justify-start text-black font-medium'>
                    Project scale: Individual.<br/>
                    Team Size: 1 people<br/>
                    My location:(front-end + deploy)<br/>
                   link clone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='https://cattiensa-clone.vercel.app/'>https://cattiensa-clone.vercel.app/</a>
                   <br/>
                    Technologies used: HTML / CSS, JavaScript, ReactJS,TaiwindCss ,AntDesign.
                    </h4>
                </span>
                <h1 className='justify-start text-black font-medium'>Source code at GitHub:</h1>
                <span className='justify-start text-black font-medium'>Website 👉:{'\t'}</span>
                <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/web_home_demo_JS-taiwin' />
                <br />
            </Drawer>
            <Drawer title="CATTIENSA_CLONE" width={900} open={open4} onClose={onClose3}
                placement="right"

            >
                 {/* <List
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
                            <h2 className='w-[600px] bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400'>Image of Website App</h2>
                        </div>
                    }
                    dataSource={img}
                    renderItem={(image, index) => (
                        <Image key={index} className="px-2" width={600} height={400} src={image} />
                    )}
                /> */}
              
                 <h1 className='text-center text-3xl text-amber-500 text-'>Detail<br /></h1>
                <span >
                    <h4 className='justify-start text-black font-medium'>
                    Project scale: Individual.<br/>
                    Team Size: 1 people<br/>
                    My location:(front-end + deploy)<br/>
                   link clone:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href='https://clone-joodo.vercel.app/'>https://clone-joodo.vercel.app/</a>
                   <br/>
                    Technologies used: HTML / CSS, JavaScript, ReactJS,TaiwindCss ,AntDesign.
                    </h4>
                </span>
                <h1 className='justify-start text-black font-medium'>Source code at GitHub:</h1>
                <span className='justify-start text-black font-medium'>Website 👉:{'\t'}</span>
                <Button type='link' className='animate-bounce' icon={<GithubOutlined />} href='https://github.com/2602hoang/web_home_demo_JS-taiwin' />
                <br />
            </Drawer>


        </section>

    )



}