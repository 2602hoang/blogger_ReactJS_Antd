import React from 'react';
import { useState } from 'react'; // Import useState if you're using it
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.png';
import { FloatButton } from 'antd';
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
    <div className ={`
    
    header ${darkMode ? '': 'dark'} 
     container mx-auto px-4`}>
   {/* <ProgressBar/> */}
    <nav className='justify-between items-center py-5 flex  '>
        <div className='md:flex top-0 left-0  z-0  md:z-20  w-40 md:w-64 md:mr-96 flex flex-row '>
            <a href='/' className=' flex items-center gap-x-2 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>
            <img src={Logo} alt="Back Home" className='w-14 h-14'/> Blogger Me</a>
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
                <a href='/' className=' md:text-black hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
               {t("Home")}
                </a>
            </li>
             <li className='m-8 md:m-0'>
                <a href='/about' className=' md:text-black hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                {t("About")}
                </a>
            </li>
             
             <li className='m-8 md:m-0'>
                <a href='/skills' className=' md:text-black hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
               {t("Skill")}
                </a>
            </li>
            <li className='m-8 md:m-0'>
                <a href='/projects' className=' md:text-black hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
                {t("Project")}
                </a>
            </li>
            <li className='m-8 md:m-0'>
                <a href='/contact' className=' md:text-black hover:border-b-2 hover:border-red-500 hover:text-red-500 transition duration-500 ease-in'>
               {t("Contact")}
                </a>
            </li>
       
        </ul>
        <div id='menu-button' className='pt-5 top-10 left-5  md:hidden cursor-pointer flexd' onClick={toggleMenu}>
           
            <FloatButton icon={<MenuOutlined  style={{color:'black', }}/>} className='flex  top-10 right-5  '/>
           
        </div>
        
    </nav>
</div>
  );
}

export default Header;
