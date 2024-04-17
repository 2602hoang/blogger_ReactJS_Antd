
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { FloatButton } from 'antd';
import { BgColorsOutlined, RetweetOutlined, SettingTwoTone } from '@ant-design/icons';

function Nav() {
    const [darkMode, setDarkMode] = useState(false);
    const [value, setValue] = useState('en'); // Initial value is 'EV'
    const handleClick = () => {
        // Toggle between 'EV' and 'VN'
        // Toggle between 'EV' and 'VN'
        const nextLang = value === 'en' ? 'vn' : 'en';
        setValue(nextLang);
        // i18n.changeLanguage(nextLang);
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    return(
        <FloatButton.Group
        trigger="click"
        type="primary"
        style={{
            right: 30,
        }}
        icon={<SettingTwoTone />}
    >
        <FloatButton tooltip={<div>Dask mode</div>} onClick={toggleDarkMode} icon={<BgColorsOutlined />} />
        <FloatButton onClick={handleClick} icon={<RetweetOutlined />} description={value} tooltip={<div>{value}</div>} />
        <FloatButton.BackTop tooltip={<div>Back Top</div>}
        />
    </FloatButton.Group>
    )
}

export default Nav