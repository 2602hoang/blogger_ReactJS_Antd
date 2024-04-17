import React from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { useDarkMode } from '../component/DarkModeProvider';

function Service() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
        <Header/>
        <div className='min-h-screen'>

        </div>

        <Fotter/></div>
      
  )
}

export default Service