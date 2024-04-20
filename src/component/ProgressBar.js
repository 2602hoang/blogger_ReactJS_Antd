import { Margin } from '@mui/icons-material';
import React, { useEffect, useState } from 'react';
import { useDarkMode } from './DarkModeProvider';

function ProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);
  const { darkMode, toggleDarkMode } = useDarkMode();
  const handleScroll = () => {
    const windowH = window.innerHeight;
    const documentH = document.documentElement.scrollHeight;
    const scrollY = window.scrollY;
    const scrolled = (scrollY / (documentH - windowH)) * 100;
    setScrollPercent(scrolled);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const progressBarStyle = {
    height: window.innerWidth >= 768 ?"7px" :`${scrollPercent}%`,
    width: window.innerWidth >= 768 ? `${scrollPercent}%` : '5px', // Adjust width based on screen size
    backgroundColor: darkMode?"#121212":"#fff",
  
  };

  return (
    <div className='
    md:w-full md:h-[7px] md:items-center md:top-0 z-50 
    h-full w-1 bg-purple-600 fixed top-0 left-0 bottom-0'>
      <div style={progressBarStyle}></div>
    </div>
  );
}

export default ProgressBar;
