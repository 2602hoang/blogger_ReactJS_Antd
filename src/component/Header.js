import React from 'react';
import { useState } from 'react'; // Import useState if you're using it
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Logo from '../assets/logo.png';
import { FloatButton } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import Nav from './Nav';
import { useDarkMode } from './DarkModeProvider';

function Header() {
    const [menuVisible, setMenuVisible] = useState(false);
   
    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };
  
    const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className ={`
    
    header ${darkMode ? 'dark' : ''} 
     container mx-auto px-4`}>
    <nav className='justify-between items-center py-5 flex'>
        <div className='md:flex md:top-0 md:left-0 top-0 right-5 z-0 ml-auto md:z-20  w-14 md:w-24 md:mr-96 '>
            <a href='/' className='flex justify-center'>
            <img src={Logo} alt="Back Home" /> </a>
        </div>
        <ul id="menu"
            className={`
            py-4
            flexd
            md:space-y-0
            fixed z-20 top-0 left-0 w-full h-full flex flex-col justify-center items-center bg-gray-900 bg-opacity-100 ${menuVisible ? '' : 'invisible'
                } md:visible md:bg-transparent md:h-auto md:flex-row md:justify-between md:static`}>
             <li className='m-8 md:m-0'>
                <a href='/' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
               Home
                </a>
            </li>
             <li className='m-8 md:m-0'>
                <a href='/about' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
                About
                </a>
            </li>
             
             <li className='m-8 md:m-0'>
                <a href='/skills' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
               Skill
                </a>
            </li>
            <li className='m-8 md:m-0'>
                <a href='/projects' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
                Project
                </a>
            </li>
            <li className='m-8 md:m-0'>
                <a href='/contact' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
               Contact
                </a>
            </li>
            <li className='m-8 md:m-0'>
                {/* <a href='/contact' className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
               Contact
                </a> */}
                <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            </li>
            {/* <li 
            {/* <li className='m-8 md:m-0'>
                <a className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
                Login
                </a>
            </li>
            <li className='m-8 md:m-0 border-2 rounded-lg border-sky-500 px-3'>
                <button className='text-white md:text-blue-500 hover:text-red-500 transition duration-500 ease-in'>
                Sign up
                </button>
            </li> */}
            {/* <li className='hidden md:flex m-8 md:m-0'>
                <select className='text-white md:text-black hover:text-red-500 transition duration-500 ease-in'>
                <option value="">EV</option>
                <option value="">VN</option>
                </select>
            </li> */}
        </ul>
        <div id='menu-button' className='pt-5 top-10 left-5  md:hidden cursor-pointer flexd' onClick={toggleMenu}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> */}
            <FloatButton icon={<MenuOutlined  style={{color:'black', }}/>} className='flex  top-10 left-5  '/>
           
        </div>
        
    </nav>
</div>
  );
}

export default Header;
