import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export const IsLogin = () => {

    const isLogin = !!localStorage.getItem('token')

  return (
    <div>
        {isLogin?<Navigate to={'/home'}/>:<Outlet/>}
    </div>
  )
}
