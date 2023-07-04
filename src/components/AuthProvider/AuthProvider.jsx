"use Client"
import React from 'react'
import { SessionProvider } from "next-auth/client";

const AuthProvider = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider
