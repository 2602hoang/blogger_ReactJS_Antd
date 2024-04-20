import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Service';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import { DarkModeProvider } from './component/DarkModeProvider';
import i18n from "./i18n/i18n";
import { LanguageProvider } from './component/LanguageProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <LanguageProvider>
    <DarkModeProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects' element={<Service />} />
          <Route path='/skills' element={<Skill />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </DarkModeProvider>
  </LanguageProvider>
);

reportWebVitals();
