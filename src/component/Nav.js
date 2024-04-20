import React, { useState } from 'react';
import { FloatButton } from 'antd';
import { BgColorsOutlined, RetweetOutlined, SettingTwoTone } from '@ant-design/icons';
import { useDarkMode } from './DarkModeProvider';
import { useTranslation } from 'react-i18next';
import { useLanguage } from './LanguageProvider';

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

    const { darkMode, toggleDarkMode } = useDarkMode();

    return (
        <FloatButton.Group
            trigger="click"
            type="default"
            className='bottom-28  right-5 md:right-5 '
            icon={<SettingTwoTone />}
        >
            <FloatButton
                tooltip={<div>{t('Dark mode')}</div>}
                onClick={toggleDarkMode}
                icon={<BgColorsOutlined />}
            />
            <FloatButton
                onClick={toggleLanguage}
                icon={<RetweetOutlined />}
                description={value}
                tooltip={<div>{value}</div>}
            />
        </FloatButton.Group>
    );
}

export default Nav;
