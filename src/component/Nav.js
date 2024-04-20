
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FloatButton } from 'antd';
import { BgColorsOutlined, RetweetOutlined, SettingTwoTone } from '@ant-design/icons';
import { useDarkMode } from './DarkModeProvider';
import { useTranslation,  } from "react-i18next";
import "../i18n/i18n"
function Nav() {
    const { t, i18n } = useTranslation();
    const [value, setValue] = useState('en'); // Initial value is 'EV'
    const handleClick = () => {
        // Toggle between 'EV' and 'VN'
        // Toggle between 'EV' and 'VN'
        const nextLang = value === 'en' ? 'vn' : 'en';
        setValue(nextLang);
        i18n.changeLanguage(nextLang);
        // i18n.changeLanguage(nextLang);
    };
    const { darkMode, toggleDarkMode } = useDarkMode();
   
    return(
        
        <FloatButton.Group
        trigger="click"
        type="default"
        className='bottom-28  right-5 md:right-5 '
        icon={<SettingTwoTone />}
    >
        <FloatButton tooltip={<div>{t('Dask mode')}</div>} onClick={toggleDarkMode} icon={<BgColorsOutlined />} />
        <FloatButton onClick={handleClick} icon={<RetweetOutlined />} description={value} tooltip={<div>{value}</div>} />
        
         </FloatButton.Group>
        
    )
}

export default Nav