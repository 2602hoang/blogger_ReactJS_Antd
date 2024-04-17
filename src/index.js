import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import reportWebVitals from './reportWebVitals';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Service from './pages/Service';
// import Portfolio from './pages/Skill';
import Contact from './pages/Contact';
import Skill from './pages/Skill';
import { DarkModeProvider } from './component/DarkModeProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <DarkModeProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />}></Route>
    <Route path='/about' element={<About />}></Route>
    <Route path='/service' element={<Service />}></Route>
    <Route path='/Skill' element={<Skill />}></Route>
    <Route path='/contact' element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
  </DarkModeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
