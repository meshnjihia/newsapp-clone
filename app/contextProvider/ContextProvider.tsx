"use client";
import { ThemeProvider } from "next-themes";
import React from "react";
const ContextProvider = ({children}:{children:React.ReactNode}) => {
  
  return (
    <ThemeProvider
      enableSystem={true}
      attribute='class'
    >
      {children}
    </ThemeProvider>
  )
}

export default ContextProvider