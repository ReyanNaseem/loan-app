import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/SignupForm'
import OtpVerify from './pages/OtpVerify'
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';

function App() {

  return (
    <>
    <main className='bg-slate-50 min-h-screen w-full border'>
      <Routes>
        <Route path='/' element={<SignupForm/>}/>
        <Route path='/verify' element={<OtpVerify/>}/>
        <Route path='/login' element={<LoginForm/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </main>
    </>
  )
}

export default App
