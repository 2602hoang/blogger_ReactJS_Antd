import React from 'react';
// import { Carousel } from 'nuka-carousel';
import me1 from "../assets/me1.png";
import me2 from "../assets/me2.png";
import me3 from "../assets/me3.png";
import me4 from "../assets/me4.png";
import me5 from "../assets/me5.png";
import me6 from "../assets/me6.png";
import me7 from "../assets/me7.png";

import { Carousel, Image } from 'antd';
// const contentStyle = {
//     height: 'auto',
//     color: '#fff',
//     wi,
//     lineHeight: '160px',
//     textAlign: 'center',
//     background: '#364d79',
// };

function Silde() {


    return (    
        <div className='  justify-center items-center '>
            <Carousel dots="true" speed={1500} autoplay autoplaySpeed={1500} className='bg-white w-[full] md:h-[600px] ' >




                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'><Image width={"auto"} height={"600px"} src={me1} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'> <Image width={"auto"} height={"600px"} src={me2} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'><Image width={"auto"} height={"600px"} src={me3} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'>  <Image width={"auto"} height={"600px"} src={me4} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'>  <Image width={"auto"} height={"600px"} src={me5} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'>  <Image width={"auto"} height={"600px"} src={me6} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[600px] w-[auto] justify-center items-center flex'>  <Image width={"auto"} height={"600px"} src={me7} /></div>
                </div>

            </Carousel>
            </div>
    );
}

export default Silde;
