import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/Home/Main/Main';
import Story from './components/OurStory/Story/Story';
import Banner from './components/Ingredients/Banner/Banner';
import All from './components/Shop/All/All';
import SinglePage1 from './components/SinglePage/SinglePage1/SinglePage1';
import Add_to_cart from './Add_to_cart/Add_to_cart';
import { ProductContextProvider } from './context/ProductContext';
import User from './User/User';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ProductContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='juice.com' element={<Main />} />
          <Route path='our-story' element={<Story />} />
          <Route path='our-ingredients' element={<Banner />} />
          <Route path='shop' element={<All />} />
          <Route path='product/:id' element={<SinglePage1 />} />
          <Route path='shopping_cart' element={<Add_to_cart />} />
          <Route path='user' element={<User />} />
          <Route exact path='/' element={<App />} />
        </Routes>
      </BrowserRouter>
    </ProductContextProvider>


  </React.StrictMode>
);

