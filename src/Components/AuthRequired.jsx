import React from "react"
import { Navigate, Outlet, useLocation } from "react-router-dom"
import { auth } from "../firebase"

export default function AuthRequired() {
  const user = auth.currentUser || localStorage.getItem("isLoggedIn") === "true";
  const location = useLocation()

  if (!user) {
    return (
      <Navigate
        to="/profile"
        state={{ message: "You must log in first", from: location.pathname }}
        replace
      />
    )
  }

  return <Outlet />
}