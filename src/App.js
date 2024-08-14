import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import ResponsiveAppBar from './components/Surfaces/appBar';
import HomePage from './page/homePage';
import DialogSlide from './components/Feedback/dialog';

function App() {
  return (
    <BrowserRouter>
      <ResponsiveAppBar/>
      <Routes  >
        
        <Route path="/" element={<HomePage />} />
        <Route path="/DialogSlide" element={<DialogSlide />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;