import { useLocation, Navigate, Outlet } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import { useEffect, useState } from 'react'

const RequireAuth = () => {
  const location = useLocation()
  const { auth } = useAuth()

  return auth ? (
    <Outlet />
  ) : (
    <Navigate
      to="/login"
      state={{
        from: location,
      }}
      replace
    />
  )
}

export default RequireAuth
