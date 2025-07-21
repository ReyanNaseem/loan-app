import React from 'react'
import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import SignupForm from './pages/SignupForm'
import OtpVerify from './pages/OtpVerify'
import LoginForm from './pages/LoginForm';
import Home from './pages/Home';
import ApplyLoan from './pages/ApplyLoan';
import LoanCategories from './pages/LoanCategories';
import { IsLogin } from './routes/IsLogin';
import { AuthGuard } from './routes/AuthGuard';

function App() {

  return (
    <>
    <main className='bg-slate-50 min-h-screen w-full border'>
      <Routes>

        <Route element={<IsLogin/>}>
          <Route path='/' element={<SignupForm/>}/>
          <Route path='/login' element={<LoginForm/>}/>
          <Route path='/verify' element={<OtpVerify/>}/>
        </Route>

        <Route element={<AuthGuard/>}>
          <Route path='/home' element={<Home/>}/>
          <Route path='/apply-loan' element={<ApplyLoan/>}/>
          <Route path='/categories' element={<LoanCategories/>}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Route>

      </Routes>
    </main>
    </>
  )
}

export default App
