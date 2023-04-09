import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Home/Main/Main';
import Story from './components/OurStory/Story/Story';
import Banner from './components/Ingredients/Banner/Banner';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='juice.com' element={<Main />} />
        <Route path='our-story' element={<Story />} />
        <Route path='our-ingredients' element={<Banner />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

