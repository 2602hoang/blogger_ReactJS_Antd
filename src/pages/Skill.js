import React from 'react'
import Header from '../component/Header'
import Fotter from '../component/Fotter'
import { useDarkMode } from '../component/DarkModeProvider';

function Skill() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  return (
    <div className={`flex w-full flex-col ${darkMode ? 'dark' : ''}`}>
        <Header/>
        <div className='min-h-screen'>
          <div>

          </div>

        </div>
        <Fotter/>
        </div>
  )
}

export default Skill