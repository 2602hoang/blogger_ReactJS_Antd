import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import Fotter from "../component/Fotter";
import img0 from "../assets/0.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img8 from "../assets/3.png";
import img6 from "../assets/4.png";
import img5 from "../assets/7.png";
import img4 from "../assets/6.png";
// import img7 from "../assets/5.png"
import img3 from "../assets/9.png";
import img9 from "../assets/8.png";
import img10 from "../assets/10.png";

import { useDarkMode } from "../component/DarkModeProvider";
import { Alert, Button, Drawer, Image, List, Modal, Tooltip } from "antd";
import { ChromeOutlined, GithubOutlined, InfoCircleOutlined, YoutubeOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import ProgressBar from "../component/ProgressBar";
import { useTranslation } from "react-i18next";
import Nav from "../component/Nav";
import Marquee from "react-fast-marquee";
function Service() {
  const { t } = useTranslation();
  useEffect(() => {
    Aos.init({
      duration: 3000, // Adjust the duration to your preference
    });
  }, []);

  const [open2, setOpen2] = useState(false);
  const showModal = () => {
    setOpen2(true);
  };
  const onClose2 = () => {
    setOpen2(false);
  };

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
  const mobile =[];
  for (let i = 1; i <= 10; i++) {
    mobile.push(require(`../assets/e${i}.png`));
  }
  const { darkMode, toggleDarkMode } = useDarkMode();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [hoveredItem1, setHoveredItem1] = useState(null);
  const values = [
    <p>
      {t("RESTAURANT FOOD ORDERING APPLICATION")} <br />
      <b className="text-red-500">({t("2 people")})</b>{" "}
    </p>,
    <p>
      {t("ZOLA CHAT APP")} <br />{" "}
      <b className="text-red-500">({t("5 people")})</b>{" "}
    </p>,
    <p>
      {t("BOOKS STORE")} <br />{" "}
      <b className="text-red-500">({t("1 people")})</b>{" "}
    </p>,
    // Add corresponding values for other elements if needed
  ];
  const string = [
    t(
      "Develop website interface for kitchen staff with ReactJS, mobile interface for service staff with ReactNative. Make API calls. Build documents and complete the database."
    ),
    t(
      "Mobile interface development with ReactNative, newspaper document development."
    ),
    t(
      "I build Back-end with NodeJS, Express using MySQL database. On Front-end, I use ReactJS to build website for users and admin. Also, I am building mobile apps for clients."
    ),
    // Thêm các giá trị tương ứng với các phần tử khác nếu cần
  ];
  const values1 = [
    t(
      "Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment." +
        "\n" +
        "Login admin 0917789964/123456"
    ),
    t(
      "Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment."
    ),
    t(
      "Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment."
    ),
    t(
      "Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment."
    ),
    // t("Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment."),
    t(
      "Build interfaces, deploy interface code and basic functions. Develop projects on the internet environment."
    ),
    t("Comming Soon . . .") + "NextJS",
    t("Comming Soon . . ."),
    // Thêm các giá trị tương ứng với các phần tử khác nếu cần
  ];
  const p = [
    t(
      "I designed and developed a website/app to sell books. On the Front-end side, I developed two interfaces, one is the user page for buying books and the other is the admin page interface. I use ReactJS, TaiwindCss, Antd (Ant Design), Antd Charts to design the interface for each page. On the Back-end side, I use NodeJS combined with MySQL database to create APIs. I develop Front-end and Back-end on the internet environment via vercel. As for the MySQL database, I use Aiven."
    ),
    t(
      "Develop websites according to personal design. The technologies applied are ReactJS + Taiwindcss + Antd + i18n + emailJS + Aos. Also use apps scipt to use API to send contact messages, send comments and get comments to display them. This website can display friendly on all devices."
    ),
    t(
      "Perform interface design and interface programming. Design mysql database and deploy it to Console. Write APIs with nodejs and deploy it to render. Implementation on the web is to retrieve product data, add invoices, print invoices, finalize invoices, in addition, there are some functions that have not yet been implemented that have been completed by the API. Applied technologies are ReactJs, emailJs, PDFJs, Taiwindcss, antd, NodeJs, MySQL."
    ),
    t(
      "Develop website according to available web templates with ReactJS + taiwindcss + antd technology. In addition, its interface can be adapted to the screens of different types of devices. The website is almost identical to the current website."
    ),
    // t("Develop website according to self-designed template with ReactJS + taiwindcss + antd technology. In addition, its interface can be adapted to the screens of different types of devices. The web has the ability to send communications using the apps script API. Specifically, when entering information into available from, it will automatically fill in google from and will be stored in google sheet. In addition, when sending, there will be a notification to the predetermined email."),
    t(
      "Website development according to figma template with ReactJS + taiwindcss + antd technology. In addition, its interface can be adapted to the screens of different types of devices. The website has English/Vietnamese and light/dark translation functions."
    ),
    t("Comming Soon . . ."),
    t("Comming Soon . . ."),
    // Thêm các giá trị tương ứng với các phần tử khác nếu cần
  ];
  const hrefs = [
    "https://web-app-six-tau.vercel.app/",
    "https://blogger-vhh.vercel.app/",
    "https://katina-git-master-2602hoangs-projects.vercel.app/",
    "https://cattiensa-clone.vercel.app/",
    // "https://web-home-demo-js-taiwin.vercel.app/",
    "https://clone-joodo.vercel.app/",
    "https://zidi-spa.vercel.app/",
    "/eror",
    // Thêm các href tương ứng với các phần tử khác nếu cần
  ];
  const hrefs1 = [
    showDrawer,
    showDrawer1,
    showModal,
    // "https://web-app-six-tau.vercel.app/",

    // Thêm các href tương ứng với các phần tử khác nếu cần
  ];

  return (
    <div
      className={`flex w-full flex-col overflow-hidden ${
        darkMode ? "" : "dark"
      }`}
    >
      <div className="flex justify-center items-center">
        <Header />
      </div>
      <div className="flex justify-center items-center">
        <Alert
          className="flex mt-[65px]  my-2 md:w-4/5 w-full overflow-hidden mx-2"
          banner
          message={
            <Marquee pauseOnHover gradient={false}>
              {t(
                "All the features on the above page are available. If you have any questions, please feel free to contact me"
              )}{" "}
              &nbsp;
              <Tooltip title={t("Click here")}>
                <a
                  href="/contact"
                  target="_blank"
                  className="text-sky-800 hover:animate-ping underline"
                >
                  {t("here")}.
                </a>
                &nbsp;
              </Tooltip>
              {t("All the information to contact me on this page is correct.")}
            </Marquee>
          }
        />
      </div>

      <ProgressBar />

      <div
        data-aos="flip-left"
        className="   mx-12 mt-7 flex flex-row justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
          />
        </svg>

        <h1
          className="text-transparent bg-clip-text text-4xl
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-center  font-bold uppercase"
        >
          {t("MOBIE APP WEBSITE APP")}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="
        
        w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>
      {/* Your other content */}
      <div className="md:mx-56 mx-2 my-5 justify-center items-center mt-8 ">
        <div className=" grid md:grid-cols-2 grid-cols-1 gap-3 md:gap-9 justify-center items-center ">
          {/* Map over your portfolio items */}
          {[img1, img2, img0].map((img, index) => (
            <div
              data-aos="flip-down"
              key={index}
              onMouseEnter={() => setHoveredItem(index)}
              onMouseLeave={() => setHoveredItem(null)}
              className={`h-[350px]
              hover:bg-white
               
              shadow-white shadow-2xl w-full border-2 rounded-2xl  hover:border-sky-700 relative
              
              `}
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >
              {hoveredItem === index && (
                <div
                  className={`transform  hover:scale-90 hover:shadow-lg 
             
                w-auto rounded-2xl h-auto absolute bg-sky-300 inset-0 
                flex justify-center items-center flex-col px-16 bg-gradient-to-t from-opacity-10 to-main-color`}
                >
                  <h4
                    className="text-center -translate-y-2
                bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 text-purple-800
                rounded-lg m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit
                text-2xl"
                  >
                    {t("Project with team")}
                  </h4>
                  <b className="text-center text-sm my-0">{values[index]}</b>
                  <p className="text-black text-start text-sm my-0">
                    {string[index]}
                  </p>
                  {/* <a target="_blank" href={hrefs1[index]} className="inline-flex justify-center items-center w-14 h-14 bg-text-color rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
      </svg>
    </a> */}
                  <div className="flex justify-center mt-auto mb-2 w-auto">
                    <Button
                      onClick={hrefs1[index]}
                      className="btn flex flex-row rounded-3xl text-yellow-400 font-semibold gap-x-1 text-center justify-center items-center"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-4 h-4"
                      >
                        <path
                          fillRule="evenodd"
                          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {t("Detail")}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        data-aos="flip-right"
        className="mt-24 flex flex-row justify-center items-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <h1
          className="text-transparent bg-clip-text text-5xl
                 bg-gradient-to-br from-purple-900 via-pink-700 to-yellow-400 text-center font-bold uppercase"
        >
          {t("WEB DESIGN")}
        </h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-12 h-12"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>
      <div className="md:mx-32 mx-2 my-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-3 md:gap-9 justify-center items-center">
          {/* Map over your portfolio items */}
          {[img3, img4, img5, img6, img8, img9, img10].map((img, index) => (
            <div
              data-aos="flip-up"
              key={index}
              onMouseEnter={() => setHoveredItem1(index)}
              onMouseLeave={() => setHoveredItem1(null)}
              className="h-[350px] shadow-white 
              shadow-2xl w-full border-2 rounded-2xl hover:bg-sky-300 hover:border-sky-300 relative"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5)),url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }}
            >
              {hoveredItem1 === index && (
                <div
                  className="bg-sky-300 rounded-2xl 
                
                transform  hover:scale-90 hover:shadow-lg
                absolute   inset-0 flex justify-center items-center flex-col px-3 bg-gradient-to-t  "
                >
                  <h4
                    className=" text-center -translate-y-2
                  bg-gradient-to-r from-orange-500 via-yellow-500 to-green-500 text-purple-800 rounded-lg m-0 self-stretch relative text-inherit leading-[44px] font-semibold font-inherit
                  text-2xl"
                  >
                    &nbsp;&nbsp;{t("Personal project")} &nbsp;&nbsp;
                    <Tooltip
                      color="orange"
                      placement="bottom"
                      title={<h2>{p[index]}</h2>}
                    >
                      <Button
                        className="animate-spin hover:animate-none"
                        type="link"
                        icon={
                          <InfoCircleOutlined
                            style={{ color: "red", fontSize: "30px" }}
                          />
                        }
                      ></Button>
                    </Tooltip>
                  </h4>

                  <p
                    className={`text-lg text-black mt-8 text-start ${
                      index === 4 ? "animate-bounce" : ""
                    }`}
                  >
                    {values1[index]}
                  </p>
                  <div className="flex flex-row justify-center items-center mt-auto">
                    {/* <Button type='link' target="_blank" href={hrefs[index]} className="flex justify-center
                   items-center w-8 h-8 bg-text-color rounded-full"
                      icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>}
                    >
                      {t("Visit here")}
                    </Button> */}
                    <div class="group relative flex justify-center items-center text-zinc-600 text-sm font-bold">
                      <div class="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-[150%] -translate-y-[300%] duration-500 group-hover:delay-500 skew-y-[20deg] group-hover:skew-y-0 shadow-md">
                        <div class="bg-lime-200 flex items-center gap-1 p-2 rounded-md">
                          <svg
                            fill="none"
                            viewBox="0 0 24 24"
                            height="20px"
                            width="20px"
                            xmlns="http://www.w3.org/2000/svg"
                            class="stroke-zinc-600"
                          >
                            <circle
                              stroke-linejoin="round"
                              r="9"
                              cy="12"
                              cx="12"
                            ></circle>
                            <path
                              stroke-linejoin="round"
                              d="M12 3C12 3 8.5 6 8.5 12C8.5 18 12 21 12 21"
                            ></path>
                            <path
                              stroke-linejoin="round"
                              d="M12 3C12 3 15.5 6 15.5 12C15.5 18 12 21 12 21"
                            ></path>
                            <path stroke-linejoin="round" d="M3 12H21"></path>
                            <path
                              stroke-linejoin="round"
                              d="M19.5 7.5H4.5"
                            ></path>
                            <g filter="url(#filter0_d_15_556)">
                              <path
                                stroke-linejoin="round"
                                d="M19.5 16.5H4.5"
                              ></path>
                            </g>
                            <defs>
                              <filter
                                color-interpolation-filters="sRGB"
                                filterUnits="userSpaceOnUse"
                                height="3"
                                width="17"
                                y="16"
                                x="3.5"
                                id="filter0_d_15_556"
                              >
                                <feFlood
                                  result="BackgroundImageFix"
                                  flood-opacity="0"
                                ></feFlood>
                                <feColorMatrix
                                  result="hardAlpha"
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                  type="matrix"
                                  in="SourceAlpha"
                                ></feColorMatrix>
                                <feOffset dy="1"></feOffset>
                                <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                                <feColorMatrix
                                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                                  type="matrix"
                                ></feColorMatrix>
                                <feBlend
                                  result="effect1_dropShadow_15_556"
                                  in2="BackgroundImageFix"
                                  mode="normal"
                                ></feBlend>
                                <feBlend
                                  result="shape"
                                  in2="effect1_dropShadow_15_556"
                                  in="SourceGraphic"
                                  mode="normal"
                                ></feBlend>
                              </filter>
                            </defs>
                          </svg>
                          <span>{hrefs[index]}</span>
                        </div>
                        <div class="shadow-md bg-lime-200 absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                        <div class="rounded-md bg-white group-hover:opacity-0 group-hover:scale-[115%] group-hover:delay-700 duration-500 w-full h-full absolute top-0 left-0">
                          <div class="border-b border-r border-white bg-white absolute bottom-0 translate-y-1/2 left-1/2 translate-x-full rotate-45 p-1"></div>
                        </div>
                      </div>

                      <div class="shadow-md flex items-center group-hover:gap-2 bg-gradient-to-br from-lime-200 to-yellow-200 p-3 rounded-full cursor-pointer duration-300">
                        <svg
                          fill="none"
                          viewBox="0 0 24 24"
                          height="20px"
                          width="20px"
                          xmlns="http://www.w3.org/2000/svg"
                          class="fill-zinc-600"
                        >
                          <path
                            stroke-linejoin="round"
                            stroke-linecap="round"
                            d="M15.4306 7.70172C7.55045 7.99826 3.43929 15.232 2.17021 19.3956C2.07701 19.7014 2.31139 20 2.63107 20C2.82491 20 3.0008 19.8828 3.08334 19.7074C6.04179 13.4211 12.7066 12.3152 15.514 12.5639C15.7583 12.5856 15.9333 12.7956 15.9333 13.0409V15.1247C15.9333 15.5667 16.4648 15.7913 16.7818 15.4833L20.6976 11.6784C20.8723 11.5087 20.8993 11.2378 20.7615 11.037L16.8456 5.32965C16.5677 4.92457 15.9333 5.12126 15.9333 5.61253V7.19231C15.9333 7.46845 15.7065 7.69133 15.4306 7.70172Z"
                          ></path>
                        </svg>
                        <a target="_blank" href={hrefs[index]}>
                          <span class="text-[0px] group-hover:text-sm duration-300">
                            {t("Visit here")}
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Fotter />

      <Drawer
        className="flex flex-col justify-center items-center"
        title={t("RESTAURANT FOOD ORDERING APPLICATION")}
        width={window.innerWidth >= 768 ? "50%" : "100%"}
        open={open}
        onClose={onClose}
        placement="right"
      >
        <div className="flex flex-col justify-center items-center w-auto">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 3,
            }}
            header={
              <div className="w-auto flex justify-center item">
                <h2 className=" uppercase bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400">
                  {t("IMAGE OF MOBIE APP")}
                </h2>
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
              pageSize: 1,
            }}
            header={
              <div className="w-auto flex justify-center item">
                <h2 className="uppercase text-center bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400">
                  {t("IMAGE OF WEBSITE APP")}
                </h2>
              </div>
            }
            dataSource={images1}
            renderItem={(image, index) => (
              <Image
                key={index}
                className="px-2"
                width={400}
                height={200}
                src={image}
              />
            )}
          />
          <h1 className="text-center text-3xl text-amber-500 text-">
            {t("Detail")}
            <br />
          </h1>
          <div className="flex mx-2">
            <span>
              <h4 className="font-medium text-black">
                {t("Project scale: graduation thesis course")}
                <br />
                {t("Team size: 2 people")}
                <br />
                {t("My location:(front-end,test-case creation, documentation)")}
                <br />-{" "}
                {t(
                  "Develop a website interface for kitchen staff with ReactJS, a mobie interface for waiters with ReactNative, develop documents, and complete the database with the rest of you."
                )}
                <br />
                {t("Project Information")}:<br />-{" "}
                {t(
                  "Staff information, ordering food, closing orders, handling operations to return water when not used up, returning dishes, providing details of dishes to customers, on the mobie application of the waitress."
                )}
                <br />-{" "}
                {t(
                  "Receive orders, process orders on the website application, CRUD dishes, staff, statistics desk at the website application of the manager."
                )}
                <br />-{" "}
                {t(
                  "The user interface is implemented using ReactJS and ReactNative."
                )}
                <br />-{" "}
                {t("The backend uses GoLang and MySQL and is deployed on VPS.")}
                <br />
                {t("Technologies used")}: HTML / CSS, JavaScript, ReactJS, React
                Native, GoLang.
                <br />
                <br />
              </h4>
            </span>
          </div>

          <h1 className="justify-start text-black font-medium">
            {t("Source code at GitHub")} &emsp;&emsp;{" "}
          </h1>

          <div className="flex flex-row">
            {" "}
            <br></br>
            <span className="justify-start text-black font-medium">
              {t("Mobile")} 👉:&emsp;
            </span>
            <Button
              type="link"
              className="animate-bounce"
              icon={<GithubOutlined />}
              href="https://github.com/2602hoang/mobie_app-ReactNative"
            />
            <br />
            <span className="justify-start text-black font-medium">
              &emsp;&emsp;{t("Website")} 👉:&emsp;
            </span>
            <Button
              type="link"
              className="animate-bounce"
              icon={<GithubOutlined />}
              href="https://github.com/2602hoang/WEBAPP-ReactJS-Antd"
            />
          </div>
        </div>
      </Drawer>

      <Drawer
        className="flex flex-col justify-center items-center"
        title={t("ZOLA CHAT APP")}
        width={window.innerWidth >= 768 ? "50%" : "100%"}
        open={open1}
        onClose={onClose1}
        placement="left"
      >
        <div className="flex w-auto flex-col justify-center items-center">
          <List
            itemLayout="vertical"
            size="large"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 1,
            }}
            header={
              <div className="w-auto flex justify-center item">
                <h2 className="uppercase text-center bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400">
                  {t("IMAGE OF WEBSITE APP")}
                </h2>
              </div>
            }
            dataSource={imgs1}
            renderItem={(image, index) => (
              <Image
                key={index}
                className="px-2"
                width={300}
                height={200}
                src={image}
              />
            )}
          />

          <List
            itemLayout="vertical"
            size="large"
            className="h-96"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 1,
            }}
            header={
              <div className="w-auto flex justify-center item">
                <h2 className="text-center uppercase bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400">
                  {t("IMAGE OF MOBIE APP")}
                </h2>
              </div>
            }
            dataSource={imgs}
            renderItem={(image, index) => (
              <Image key={index} className="px-2 " width={200} src={image} />
            )}
          />

          <h1 className="mt-36 text-center text-3xl text-amber-500 text-">
            Detail
            <br />
          </h1>
          <div className="flex flex-col">
            <span>
              <h4 className="justify-start text-black font-medium">
                {t("Project scale: project in schools")}.<br />
                {t("Team Size: 5 people")}
                <br />
                {t("My location:(front-end,test-case creation, documentation)")}
                <br />-
                {t(
                  "ReactNative mobie interface development, newspaper documentation development"
                )}
                .<br />
                {t("Project Information")}:<br />-
                {t(
                  "CRUD user information and chat, CU messages, making video calls."
                )}
                <br />–
                {t(
                  "The user interface is implemented using ReactJS and ReactNative with TailwindCSS and Charka UI, real-time connection using socket.io and web has been implemented for Netlify."
                )}
                <br />-
                {t(
                  "The backend uses NodeJS and MongoDB and is implemented for Heroku."
                )}
                <br />
                {t("Technologies used")}: HTML / CSS, JavaScript, ReactJS, React
                Native, MongoDB.
              </h4>
            </span>
            <div className="flex">
              <br />
              <h1 className="justify-start text-black font-medium">
                {t("Source code at GitHub")}:&emsp;
              </h1>
            </div>
            <div className="flex flex-row">
              <span className="justify-start text-black font-medium">
                {t("Mobile & Website")} 👉:{"\t"}
              </span>
              <Button
                type="link"
                className="animate-bounce"
                icon={<GithubOutlined />}
                href="https://github.com/2602hoang/zola-gui"
              />
            </div>
          </div>
        </div>
      </Drawer>
      <Modal
    
        title={
          <a>
            <InfoCircleOutlined /> Chi Tiết Dự Án
          </a>
        }
        open={open2}
        onCancel={onClose2}
        onClose={onClose2}
        okButtonProps={{
          disabled: true,
          hidden: true,
        }}
        cancelButtonProps={{
          disabled: true,
          hidden: true,


        }}
  
      >
        <div className="flex flex-col h-auto justify-center items-center">
          <div className="flex flex-col">
          <p className="font-bold">Website + Backend: </p>
          <span>{t("I designed and developed a website/app to sell books. On the Front-end side, I developed two interfaces, one is the user page for buying books and the other is the admin page interface. I use ReactJS, TaiwindCss, Antd (Ant Design), Antd Charts to design the interface for each page. On the Back-end side, I use NodeJS combined with MySQL database to create APIs. I develop Front-end and Back-end on the internet environment via vercel. As for the MySQL database, I use Aiven.")}</span>
          <a href="https://web-app-six-tau.vercel.app/login" target="_blank"><ChromeOutlined /> Link web : https://web-app-six-tau.vercel.app/login </a>
          <a href="https://www.youtube.com/watch?v=u4234HpFlek" target="_blank"><YoutubeOutlined /> Demo: https://www.youtube.com/watch?v=u4234HpFlek</a>
          </div>  

          <div className="flex flex-col">
          <p className="font-bold">Mobile:</p>
          <span>{t("Comming Soon . . .")}</span>
          <List
            itemLayout="vertical"
            size="large"
            className="h-auto"
            pagination={{
              onChange: (page) => {
                console.log(page);
              },
              pageSize: 2,
            }}
            header={
              <div className="w-auto flex justify-center item">
                <h2 className="text-center uppercase bg-gradient-to-br from-purple-800 via-pink-700 to-yellow-400">
                  {t("IMAGE OF MOBIE APP")}
                </h2>
              </div>
            }
            dataSource={mobile}
            renderItem={(image, index) => (
              <Image key={index} className="px-2 " width={200} src={image} />
            )}
          />


          </div>
        </div>

      </Modal>
    </div>
  );
}

export default Service;
