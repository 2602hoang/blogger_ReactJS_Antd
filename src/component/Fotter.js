import { Alert, Button } from 'antd';
import { FloatButton } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../i18n/i18n';
import { TypeAnimation } from 'react-type-animation';
import emailjs from '@emailjs/browser';
import Marquee from 'react-fast-marquee';

function Fotter() {
  const { t } = useTranslation();
  const [time, setTime] = useState('');
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const email = form.current.email.value.trim();
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    emailjs.sendForm('service_aw59fbd', 'template_fyuxrdd', form.current, {
        publicKey: 'h5_X9EnatlgBbFUa7',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(`${email} +1 Subscribe. Successful!!!`)
          form.current.email.value = '';
         
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  const validateEmail = (email) => {
    // Basic regex for email validation
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const daysOfWeek = [t('Sunday'), t('Monday'), t('Tuesday'), t('Wednesday'), t('Thursday'), t('Friday'), t('Saturday')];
      const dayOfWeek = daysOfWeek[now.getDay()];
      // const hours = now.getHours().toString().padStart(2, '0');
      // const minutes = now.getMinutes().toString().padStart(2, '0');
      // const seconds = now.getSeconds().toString().padStart(2, '0');
      const day = now.getDate().toString().padStart(2, '0');
      const month = (now.getMonth() + 1).toString().padStart(2, '0'); // Adding 1 because getMonth() returns zero-based month index
      const year = now.getFullYear().toString();
      const timeString = ` ${dayOfWeek},${day}/${month}/${year}`;
      setTime(timeString);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden border-t-2 flex-col flex w-full justify-center items-center flex-wrap bg-secondary-bg-color p-8">

      <FloatButton.BackTop style={{ height: '60px', width: '60px' }} tooltip={<b>Back Top</b>} />

     
      <div className='flex md:flex-row flex-col overflow-hidden md:gap-x-8 gap-y-3 md:mr-0 mr-auto items-center justify-center'>
      


        <div class=" group before:absolute before:bg-sky-500 before:w-3 before:h-12 overflow-hidden
         before:top-24 before:-right-2 before:-z-10 before:rounded-2xl before:shadow-inner before:shadow-gray-50
          relative w-60 h-60 bg-sky-500 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
          <div class="w-56 h-56 bg-neutral-900 shadow-inner shadow-gray-50 flex justify-center items-center rounded-3xl">
            <div class="flex flex-col items-center justify-center rounded-2xl bg-neutral-900 shadow-inner shadow-gray-50 w-52 h-52">
              <div class="group-hover:duration-300 hover:opacity-100  opacity-0 before:absolute before:w-12 before:h-12 before:bg-orange-800 before:rounded-full before:blur-xl before:top-16 relative   flex flex-col justify-around items-center w-44 h-40 bg-neutral-900 text-gray-50">
                <span class="">{time}</span>
                <span className="z-10 flex items-center text-6xl text-amber-600 [text-shadow:_2px_2px_#fff,_1px_2px_#fff]">
                  {new Date().getHours().toString().padStart(2, '0')}
                  <span className="text-xl font-bold text-gray-50 [text-shadow:none]">:</span>
                  {new Date().getMinutes().toString().padStart(2, '0')}
                </span>        <div class="text-gray-50 w-48 flex flex-row justify-evenly">
                  <span class="text-xs font-bold">100%</span>
                  <div class="flex flex-row items-center">
                    <svg class="w-5 h-5 fill-red-500 animate-bounce" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path class="" d="M23,27.6a15.8,15.8,0,0,1,22.4,0L50,32.2l4.6-4.6A15.8,15.8,0,0,1,77,50L50,77,23,50A15.8,15.8,0,0,1,23,27.6Z" fill-rule="evenodd">
                      </path>
                    </svg>
                    <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path class="svg-fill-primary" d="M80.2,40.7l-1.1-2-.2-.3.3-.3c2.2-14.7-21.3-25.6-20.7-21S57,38.1,45.4,31.8c-9.3-5.1-12.9,12.1-22.8,33.7C16.2,79.4,20.8,82.3,27,81l.3.4L29,83.3a1.4,1.4,0,0,0,1.8.5l.9-.3a1.6,1.6,0,0,0,1.1-1.9l-.5-2.5a38.2,38.2,0,0,0,4.5-2.7L38.6,78a1.8,1.8,0,0,0,2.4-.1l1.2-1.1a1.9,1.9,0,0,0,.4-1.9l-1-2.5L45.5,69l1.7,1.6a1.8,1.8,0,0,0,2.4-.1l.9-1a1.7,1.7,0,0,0,.4-1.8L50,65c5.6-5,11.9-10.9,17.3-15.8l.4.2,1.9,1.1a1.6,1.6,0,0,0,2.1-.2l.8-.8a1.6,1.6,0,0,0,.3-2.1l-1.3-2.1,3.2-3.1,2.2,1.5a1.8,1.8,0,0,0,2.2-.1l.8-.8A1.7,1.7,0,0,0,80.2,40.7Z">
                      </path>
                    </svg>
                    <svg class="w-5 h-5 fill-current" height="100" preserveAspectRatio="xMidYMid meet" viewBox="0 0 100 100" width="100" x="0" xmlns="http://www.w3.org/2000/svg" y="0">
                      <path class="svg-fill-primary" d="M59.5,20.5a3.9,3.9,0,0,0-2.5-2,4.3,4.3,0,0,0-3.3.5,11.9,11.9,0,0,0-3.2,3.5,26,26,0,0,0-2.3,4.4,76.2,76.2,0,0,0-3.3,10.8,120.4,120.4,0,0,0-2.4,14.2,11.4,11.4,0,0,1-3.8-4.2c-1.3-2.7-1.5-6.1-1.5-10.5a4,4,0,0,0-2.5-3.7,3.8,3.8,0,0,0-4.3.9,27.7,27.7,0,1,0,39.2,0,62.4,62.4,0,0,1-5.3-5.8A42.9,42.9,0,0,1,59.5,20.5ZM58.4,70.3a11.9,11.9,0,0,1-20.3-8.4s3.5,2,9.9,2c0-4,2-15.9,5-17.9a21.7,21.7,0,0,0,5.4,7.5,11.8,11.8,0,0,1,3.5,8.4A12,12,0,0,1,58.4,70.3Z" fill-rule="evenodd">
                      </path>
                    </svg>
                  </div>
                </div>
              </div>
              <span class="text-gray-700 text-lg font-light">{t("Watch")}</span>
            </div>
          </div>
        </div>
    
        <form
        ref={form} onSubmit={sendEmail}
          class="text-neutral-800 py-6 overflow-hidden relative justify-center items-center flex flex-col md:w-auto w-11/12 h-44 
          border border-neutral-500 rounded-lg bg-neutral-50 p-3 md:px-6"
        >
          <div
            class="before:absolute before:w-32 before:h-20 before:right-2 before:bg-rose-300 before:-z-10 before:rounded-full before:blur-xl before:-top-12 z-10 after:absolute after:w-24 after:h-24 after:bg-purple-300 after:-z-10 after:rounded-full after:blur after:-top-12 after:-right-6"
          >
            <span class="font-extrabold text-2xl text-violet-600"
            >{t("Leave your Email here")}...</span
            >
            <p class="text-neutral-700">
              {t("Subscribe to get information, latest news about me")} !🤗🤗🤗
            </p>
          </div>
          <div class="flex gap-1">
            <div
              class="relative rounded-lg w-64 overflow-hidden before:absolute before:w-12 before:h-12 before:content[''] before:right-0 before:bg-violet-500 before:rounded-full before:blur-lg after:absolute after:z-10 after:w-20 after:h-20 after:content[''] after:bg-rose-300 after:right-12 after:top-3 after:rounded-full after:blur-lg"
            >
              <input
                type="text"
                required  
                // ref={emailInputRef} 
                name="email"
                class="relative bg-transparent ring-0 outline-none border text-red-500 border-neutral-500 font-semibold placeholder-violet-700 text-sm rounded-lg focus:ring-violet-500 placeholder-opacity-60 focus:border-violet-500 block w-full p-2.5 checked:bg-emerald-500"
                placeholder="Email..."
              />
            </div>
            <button className="bg-violet-500 text-neutral-50 md:p-2 p-0 rounded-lg hover:bg-violet-400" type="submit">
              {t("Subscribe")}
            </button>
          </div>
        </form>



     



      </div>
      <p className="text-center text-base">{t("Copyright")} &copy; 2024 {t("by")} Vu Hoang  <span>Dev</span> | {t("All Rights Reserved")}</p>

    </div>
  )
}
export default Fotter;
