import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

export const AuthGuard = () => {
    const isLogin = !!localStorage.getItem('token');


  return (
    <div>
        {
            isLogin?<Outlet />:<Navigate to={'/login'} />
        }
    </div>
  )
}
