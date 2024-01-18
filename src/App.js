import logo from './logo.svg';
import './App.css';
import './assets/style/home.css';
import './assets/style/my.css';
import './assets/style/stage_1.css';
import './assets/style/scrate.css';
import Home from './component/Home';
import Stage_1 from './component/Stage_1';
import CheckEmail from './component/CheckEmail';
import { Route,Routes } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import song from './assets/music/1.mp3';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home song = {song} />} />
      <Route path='/first-check' element={<Stage_1 song = {song}/>} />
      <Route path='/email-check' element={<CheckEmail/>} />
    </Routes>

  );
}

export default App;
