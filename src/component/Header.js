import React from 'react';
import { useState } from 'react'; // Import useState if you're using it
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.png';
import { FloatButton, Tooltip } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Nav from './Nav';
import { useDarkMode } from './DarkModeProvider';
import ProgressBar from './ProgressBar';
import "../i18n/i18n"
import { useTranslation } from 'react-i18next';
function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
    const { t, i18n } = useTranslation();
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const { darkMode, } = useDarkMode();

    return (
        <div className={`
    w-full
    md:rounded-2xl
     justify-center
     items-center
     container
    z-30
    top-0
    overflow-hidden
     ${darkMode ? '' : 'dark'} 
      mx-auto px-4`}>
            {/* <ProgressBar/> */}
            <nav className='justify-between items-center flex   '>
                <div className='md:flex top-0 left-0  z-50  md:z-50  w-52 md:w-72 md:mr-96 flex flex-row '>
                    <Tooltip title={t("Back to Home")}>
                    <a href='/' className='hover:animate-ping font-black flex  items-center gap-x-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
                        <img src={Logo} alt="Back Home" className='mt-2 w-12 h-12' />Blog Me</a>
                    </Tooltip>
                </div>
                <ul id="menu"
                    className={`
            py-4
            flexd
            md:space-y-0
            ${darkMode ? 'bg-slate-100' : 'dark'} 
            fixed z-20 top-0 left-0 w-full h-full flex font-bold flex-col justify-center items-center  bg-opacity-80 ${menuVisible ? 'min-h-full' : 'invisible'
                        } md:visible md:bg-transparent md:h-auto md:flex-row md:justify-between md:static`}>
                    <li className='m-8 md:m-0'>
                        <a href='/' className=' md:text-white hover:animate-pulse hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                            {t("Home")}
                        </a>
                    </li>
                    <li className='m-8 md:m-0'>
                        <a href='/about' className=' md:text-white hover:animate-pulse hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                            {t("About")}
                        </a>
                    </li>

                    <li className='m-8 md:m-0'>
                        <a href='/skills' className=' md:text-white hover:animate-pulse hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                            {t("Skill")}
                        </a>
                    </li>
                    <li className='m-8 md:m-0'>
                        <a href='/projects' className=' md:text-white hover:animate-pulse hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                            {t("Project")}
                        </a>
                    </li>
                    <li className='m-8 md:m-0'>
                        <a href='/contact' className=' md:text-white hover:animate-pulse hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                            {t("Contact")}
                        </a>
                    </li>
                    <li className='m-8 md:m-0'>



                    </li>
                </ul>
                <div id='menu-button' className='absolute  pt-5 top-5 left-5  md:hidden cursor-pointer z-50 flexd' onClick={toggleMenu}>

                    <FloatButton icon={<MenuOutlined style={{ color: 'black', }} />} className={`flex z-50  top-3 right-5 bg-`} />

                </div>

            </nav>
            
        </div>
    );
}

export default Header;
