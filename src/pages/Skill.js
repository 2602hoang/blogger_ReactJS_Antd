import React, { useEffect } from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { useDarkMode } from '../component/DarkModeProvider';
import Aos from 'aos';
import "aos/dist/aos.css"
import ProgressBar from '../component/ProgressBar';
import { useTranslation } from 'react-i18next';
import Nav from '../component/Nav';
import me1 from "../assets/me1.png";
import { AntDesignOutlined } from '@ant-design/icons';
function Skill() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  useEffect(() => {
    Aos.init({
      duration: 1000, // Adjust the duration to your preference
    });
  }, []);
  const { t } = useTranslation();
  return (


    <div className={`justify-center  overflow-hidden items-center flex w-full flex-col ${darkMode ? '' : 'dark'}`}>


      <ProgressBar />

      <div className='  md:mx-32  flex flex-col justify-center items-center'>
        <Header />
       
        {/* ${darkMode ? "container1" : "container3"}  */}
        <div className={`flex my-8  
        
           justify-center items-center flex-col `}>

          <div className='flex md:mx-20 mx-2 '>
            <div className='    mt-8 min-h-screen w-full h-auto flex justify-center items-center  flex-col'>

              <b className=' flex justify-center items-center
                      text-7xl text-transparent bg-clip-text
                      bg-gradient-to-br
                        from-purple-900 via-pink-700 to-yellow-400 
                        text-center animate-pulse uppercase'>{t("SKILLS ABOUT ME")}</b>
              <div className='flex flex-col justify-center items-center'>
                <div data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"

                  className='flex-col flex justify-center items-center'>
                  <h1 className='text-sky-300 text-center font-extrabold mt-12 animate-pulse border-t-2 text-5xl'>{t("Programming Skills")}</h1>
                  <div class="flex-col  flex text-center justify-center items-center   ">
                    <div class="animate-float-image hover:animate-none my-10 mt-28 mx-2 md:flex-row  md:space-y-0 space-y-5  flex-wrap flex-col flex text-center justify-center items-center space-x-2  w-auto">
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >JavaScript</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-red-200 text-red-800 rounded-full">HTML</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-orange-200 text-orange-800 rounded-full">CSS</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-yellow-200 text-yellow-800 rounded-full">ReactJS</div>

                      <div class="text-xl shadow-white shadow-2xl px-3 bg-green-200 text-green-800 rounded-full">ReactNative</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-teal-200 text-teal-800 rounded-full">Antd</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-blue-200 text-blue-800 rounded-full">Tailwindcss</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-purple-200 text-purple-800 rounded-full">Java/C#/C++</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-pink-200 text-pink-800 rounded-full"> ⭐</div>
                    </div>



                  </div>


                </div>

                <div class="relative h-full w-full flex items-center justify-center">
                  <div class="profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 border-gray-400/50">
                    <button title='React' class="profile_item left-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg viewBox="0 0 128 128">
                          <g fill="#61DAFB"><circle r="11.4" cy="64" cx="64"></circle><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path></g>
                        </svg>
                      </span>
                    </button>

                    <button title='TaiwindCss' class="profile_item right-[45px] -top-[4px] absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg viewBox="0 0 48 48" y="0px" x="0px" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24,9.604c-6.4,0-10.4,3.199-12,9.597c2.4-3.199,5.2-4.398,8.4-3.599 c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.6 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-6.4,0-10.4,3.199-12,9.598 c2.4-3.199,5.2-4.399,8.4-3.599c1.825,0.457,3.13,1.781,4.575,3.246c2.353,2.388,5.077,5.152,11.025,5.152 c6.4,0,10.4-3.199,12-9.598c-2.4,3.199-5.2,4.399-8.4,3.599c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24 L12,24z" fill="#00acc1"></path>
                        </svg>
                      </span>
                    </button>

                    <button title='HTML' class="profile_item -left-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.2 6.8H7.8l.4 4.4h7.6l-.6 5-3.4 1-3.6-1v-2" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                    </button>

                    <button title='JavaSprict' class="profile_item -right-4 top-20 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.6 7v9l-3.1-.9M16.5 7l-3.1.4v5l3.1-.5v3.2l-3.6.9" stroke="#FF8A65" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                      </span>
                    </button>

                    <button title='Css' class="profile_item bottom-8 -left-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                          <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z">
                          </path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                        </svg>
                      </span>
                    </button>

                    <button title='Ant Design' class="profile_item bottom-8 -right-0 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <AntDesignOutlined style={{ fontSize: "30px", color: 'red' }} />
                      </span>
                    </button>

                    <button title='MySQL' class="profile_item right-[40%] -bottom-4 absolute rounded-full bg-cover cursor-pointer border border-gray-400/50 p-[2px] active:scale-95 hover:scale-95 transition-all duration-500">
                      <span class="block w-[40px] h-[40px] transition-all duration-500 rounded-full z-[2] bg-white p-1">
                        <svg width="50" height="50" viewBox="5 5 100 100" xmlns="http://www.w3.org/2000/svg" fill="#1EC7F2" stroke="#121212">
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                          <g id="SVGRepo_iconCarrier">
                            <path fill-opacity="0.701961" stroke-linejoin="round"
                              d="M38,33C47.384,33,54.9921,30.9874,55,28.5039L55,52.5C55,54.9853,47.3888,57,38,57L38,49.1579L38.0675,49.16L39.23,50.4137C39.6033,50.8029,39.9871,51.1417,40.3813,51.43C40.7754,51.7183,41.1875,51.9454,41.6175,52.1113C42.0475,52.2771,42.5183,52.36,43.03,52.36L44.1075,52.2913L44.8,52.155L44.8,50.085L44.5425,50.1663L44.25,50.2288L43.9487,50.2675L43.675,50.28L42.8237,50.215L42.0613,49.9813L41.3237,49.5213L40.55,48.7775C41.635,48.3892,42.4808,47.72,43.0875,46.77C43.6958,45.81,44,44.6633,44,43.33C44,41.6233,43.5025,40.2508,42.5075,39.2125C41.5175,38.1642,40.2233,37.64,38.625,37.64L38,37.6653L38,33Z M52,23.5L55,23.5L55,25.5C55,27.9853,47.3888,30,38,30L38,25C45.732,25,52,24.3285,52,23.5Z M38.5375,39.88C39.3975,39.88,40.07,40.1992,40.555,40.8375C41.0383,41.4658,41.28,42.34,41.28,43.46C41.28,44.54,41.0275,45.3892,40.5225,46.0075C40.0242,46.6158,39.3417,46.92,38.475,46.92L38,46.8837L38,39.9251L38.5375,39.88Z M52.48,49L52.48,46.92L48.32,46.92L48.32,37.8L45.76,37.8L45.76,49L52.48,49Z"></path>
                            <path fill-opacity="1" stroke-linejoin="round" d="M38,57C28.6111,57,21,54.9853,21,52.5L21,28.5C21,30.9853,28.6112,33,38,33L38,37.6436C36.5609,37.7589,35.3876,38.296,34.48,39.2549C33.4533,40.3399,32.94,41.7666,32.94,43.5349C32.94,44.3083,33.0616,45.0324,33.305,45.7074C33.5483,46.3824,33.8929,46.9704,34.3387,47.4712C34.7846,47.972,35.3216,48.3703,35.95,48.6662C36.5654,48.9559,37.2487,49.1134,38,49.1385L38,57Z M55,23.5L52,23.5C52,22.6716,45.732,22,38,22C30.268,22,24,22.6716,24,23.5C24,24.3285,30.268,25,38,25L38,30C28.6111,30,21,27.9853,21,25.5L21,23.5C21,21.0148,28.6112,19,38,19C47.384,19,54.9921,21.0127,55,23.5Z M24.14,48.5324C24.5483,48.7341,25.0312,48.8858,25.5887,48.9874C26.1462,49.0891,26.7341,49.1399,27.3525,49.1399C27.9541,49.1399,28.5258,49.0829,29.0675,48.9687C29.6091,48.8545,30.0841,48.6666,30.4925,48.4049C30.9008,48.1433,31.2241,47.8016,31.4625,47.3799C31.7008,46.9583,31.82,46.4366,31.82,45.8149C31.82,45.3649,31.7533,44.9704,31.62,44.6312C31.4866,44.292,31.2941,43.9904,31.0425,43.7262C30.7908,43.462,30.4891,43.2249,30.1375,43.0149L28.9475,42.4199L28.0775,42.0287L27.4225,41.6399L27.0062,41.2212C26.9087,41.0737,26.86,40.9066,26.86,40.7199C26.86,40.5416,26.9037,40.3804,26.9912,40.2362L27.3612,39.8649L27.9475,39.6249L28.7175,39.5399L29.37,39.5874L30.06,39.7349L30.735,39.9874L31.34,40.3399L31.34,38.0424C30.96,37.8991,30.5445,37.7929,30.0937,37.7237L28.5425,37.6199C27.9475,37.6199,27.3841,37.6833,26.8525,37.8099C26.3208,37.9366,25.8529,38.1349,25.4487,38.4049C25.0445,38.6749,24.7254,39.0183,24.4912,39.4349C24.257,39.8516,24.14,40.3499,24.14,40.9299C24.14,41.6699,24.3516,42.3016,24.775,42.8249C25.1983,43.3483,25.8416,43.7908,26.705,44.1524L27.6512,44.5649L28.41,44.9849L28.915,45.4587C29.0383,45.6295,29.1,45.8233,29.1,46.0399L28.9837,46.5074C28.9062,46.6508,28.7883,46.7754,28.63,46.8812L28.0387,47.1299L27.21,47.2199C26.6716,47.2199,26.1383,47.1266,25.61,46.9399C25.0816,46.7533,24.5916,46.4733,24.14,46.0999L24.14,48.5324Z M36.4325,40.8324C36.8449,40.3182,37.3674,40.0079,38,39.9016L38,46.8667C37.3683,46.7709,36.8433,46.4678,36.425,45.9574C35.915,45.3241,35.66,44.4699,35.66,43.3949C35.66,42.3299,35.9175,41.4758,36.4325,40.8324Z"></path>
                          </g>
                        </svg>


                      </span>
                    </button>

                    <button className="
                    profile_item w-[200px] h-[200px] p-1 border-2 rounded-full hover:border-gray-400/50 cursor-pointer transition-all duration-500 z-0">
                      <div
                        style={{ backgroundImage: `url(${me1})` ,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '100%',
                        backgroundPosition: 'center',
                      
                      }} // Use template literals for dynamic values
                        className="w-full bg-white h-full flex items-center justify-center p-2 rounded-full active:scale-95 hover:scale-95 object-cover transition-all duration-500"
                      >
                        <span className="w-20 h-20 inline-block"></span>
                      </div>
                      
                    </button>

                  </div>
                </div>


                <div data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" className='flex-col flex justify-center items-center'>
                  <h1 className='text-sky-300 mt-12 font-extrabold text-6xl text-center border-t-2 animate-pulse'>{t("Soft Skills")}</h1>
                  <div class=" my-5 flex-col md:flex-row flex text-center justify-center items-center flex-wrap  ">
                    {/* <marquee behavior	="alternate" direction="right"> */}
                    <div class="animate-float-image hover:animate-none my-10 mt-28 space-x-5  md:flex-row md:space-y-0 space-y-5 flex-col flex   text-center
                                                    justify-center items-center   w-auto ">
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-indigo-200 text-indigo-800 rounded-full" >{t("Inquisitive, progressive")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-red-200 text-red-800 rounded-full">{t("Work under pressure")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-orange-200 text-orange-800 rounded-full">{t("Teamwork")}</div>

                      <div class="text-xl shadow-white shadow-2xl px-3 bg-yellow-200 text-yellow-800 rounded-full">{t("Ability to adapt quickly")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-green-200 text-green-800 rounded-full">{t("Quick acquisition")}</div>
                      <div class="text-xl shadow-white shadow-2xl px-3 bg-teal-200 text-teal-800 rounded-full">{t("Inquisitive, progressive")}</div>
                    </div>
                    {/* </marquee> */}
                  </div>

                </div>
              </div>

            </div>
          </div>
          <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        </div>
      </div>

      <Fotter />


    </div>

  )
}

export default Skill