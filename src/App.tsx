// import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RegisterScreen from './pages/RegisterScreen/RegisterScreen';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import './App.css';

function App() {

  return (
    <div className='app-container'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegisterScreen />}></Route>
          <Route path='/home' element={<HomeScreen />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
