'use client'

import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'
const DarkMode = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, systemTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])
  if (!mounted) {
    return null
  }
  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
      {currentTheme === 'dark' ? (
        <SunIcon
          className="h-6 w-6 cursor-pointer text-yellow-400"
          onClick={() => setTheme('light')}
        />
      ) : (
        <MoonIcon
          className="h-6 w-6 cursor-pointer text-slate-800"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}

export default DarkMode
