import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import { DarkModeProvider, useDarkMode } from './component/DarkModeProvider';
import i18n from "./i18n/i18n";
import { LanguageProvider } from './component/LanguageProvider';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import logo from "./assets/dev.png"

const Spinner = () => {
  const { darkMode } = useDarkMode();

  return (
    <Spin
      delay={1}
      indicator={
        
        <LoadingOutlined style={{ fontSize: 50 }} spin />
      
    }
      style={{
          background: darkMode ? "#fff" : "#121212",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
    
    </Spin>
  );
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 750); // 500 milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={loading ? <Spinner /> : <Home />} />
            <Route path='/about' element={loading ? <Spinner /> : <About />} />
            <Route path='/projects' element={loading ? <Spinner /> : <Service />} />
            <Route path='/skills' element={loading ? <Spinner /> : <Skill />} />
            <Route path='/contact' element={loading ? <Spinner /> : <Contact />} />
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </LanguageProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

reportWebVitals();
