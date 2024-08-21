import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ResponsiveAppBar from './components/Surfaces/appBar';
import HomePage from './page/homePage';
import DialogSlide from './components/Feedback/dialog';
import Footer from './components/Surfaces/footer';
import Condition from './page/condition';
import HowToRent from './page/howToRent';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes  >
        
        <Route path="/" element={<HomePage />} />
        <Route path="/Condition" element={<Condition />} />
        <Route path="/HowToRent" element={<HowToRent />} />

        <Route path="/DialogSlide" element={<DialogSlide />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;