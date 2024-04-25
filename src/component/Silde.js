import React from 'react';
// import { Carousel } from 'nuka-carousel';
import me1 from "../assets/me1.png";
import me2 from "../assets/me2.png";
import me3 from "../assets/me3.png";
import me4 from "../assets/me4.png";
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
            <Carousel dots="true" speed={1000} autoplay autoplaySpeed={500} className='w-[full] md:h-[800px]' >




                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[800px] w-[auto] justify-center items-center flex'><Image src={me1} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[800px] w-[auto] justify-center items-center flex'> <Image src={me2} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[800px] w-[auto] justify-center items-center flex'><Image src={me3} /></div>
                </div>
                <div className='flex justify-center items-center w-full'> 
                    <div className='md:h-[800px] w-[auto] justify-center items-center flex'>  <Image src={me4} /></div>
                </div>
            </Carousel>
            </div>
    );
}

export default Silde;
