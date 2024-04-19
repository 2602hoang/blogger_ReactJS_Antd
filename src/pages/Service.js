import React from 'react';
import Header from '../component/Header';
import Fotter from '../component/Fotter';
import img1 from "../assets/1.png"
import img2 from "../assets/2.png"
import img3 from "../assets/3.png"
import img4 from "../assets/4.png"
import img5 from "../assets/5.png"
import img6 from "../assets/6.png"

import { useDarkMode } from '../component/DarkModeProvider';

function Service() {
  const { darkMode } = useDarkMode();

  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
      <Header />
      <div className='flex w-full justify-center items-center my-5'>
        <h1 className='text-transparent animate-float-image bg-clip-text bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-center font-bold text-5xl'>
          OUTSTANDING PROJECT
        </h1>
      </div>


      <div className='my-5 h-auto min-h-screen w-full   justify-center items-center'>

        <div className='mx-2 md:space-x-2 w-full h-auto md:grid md:grid-cols-2 md:space-y-0 space-y-3 justify-center items-center'>
          <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%',
            backgroundPosition: 'center'
          }} className='h-[350px] w-full  border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700'>
            {/* <b className='text-center'>Project 1</b> */}
          </div>
          <div style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img2})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '50%',
            backgroundPosition: 'center'
          }} className='h-[350px] w-full  border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700'>
            {/* <b className='text-center'>Project 1</b> */}
          </div>
        </div>





        <div className='mx-2 md:space-x-2 w-full h-auto md:grid md:grid-cols-2 mt-3 md:space-y-0 space-y-3 justify-center items-center'>

          <div style={{ backgroundImage: `url(${img3})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='grid  h-[350px] w-full  border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700  '>
            {/* <b className='text-center'>Project 1</b> */}
          </div>
          <div style={{ backgroundImage: `url(${img4})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='grid  h-[350px] w-full   border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700  '>
            {/* <b className='text-center'>Project 1</b> */}
          </div>
          <div style={{ backgroundImage: `url(${img5})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='grid  h-[350px] w-full   border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700  '>
            {/* <b className='text-center'>Project 1</b> */}
          </div>
          <div style={{ backgroundImage: `url(${img6})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}
            className='grid  h-[350px] w-full   border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700  '>
            {/* <b className='text-center'>Project 1</b> */}
          </div>

        </div>


        {/* <div className=' md:grid md:grid-cols-3 md:gap-y-10 md:gap-x-10'>
          {[1, 2, 3, ].map(project => (
            <div key={project} className='my-3 grid h-96 w-96 border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-700'>
              <b className='text-center'>comming soon{project}</b>
            </div>
          ))}
        </div> */}
      </div>
      <Fotter />
    </div>
  );
}

export default Service;
