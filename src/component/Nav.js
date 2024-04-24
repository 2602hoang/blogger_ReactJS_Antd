import React, { useState } from 'react';
import { FloatButton } from 'antd';
import { BgColorsOutlined, SettingTwoTone } from '@ant-design/icons';
import { useDarkMode } from './DarkModeProvider';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageProvider';
import tr from "../assets/VN-EN.png";

function Nav() {
    const { t, i18n } = useTranslation();
    const { language, changeLanguage } = useLanguage();
    const [value, setValue] = useState(language);

    const toggleLanguage = () => {
        const nextLang = language === 'en' ? 'vn' : 'en';
        setValue(nextLang);
        i18n.changeLanguage(nextLang);
        changeLanguage(nextLang);
    };

    const { toggleDarkMode } = useDarkMode();

    return (
       
            <FloatButton.Group
                trigger="click"
                type="default"
                icon={<SettingTwoTone />}
                className="right-5 bottom-28"
            >
                <FloatButton
                    tooltip={<div>{t('Dark mode')}</div>}
                    onClick={toggleDarkMode}
                    icon={<BgColorsOutlined />}
                />


                
                <FloatButton
                    onClick={toggleLanguage}
                    icon={<img src={tr} alt="Language" />}
                    description={value}
                    tooltip={<div>{value}</div>}
                />
                
            </FloatButton.Group>
        
    );
}

export default Nav;
