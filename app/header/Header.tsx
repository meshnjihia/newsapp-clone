"use client"

import Link from 'next/link'
import React from 'react'
import { Bars4Icon } from '@heroicons/react/24/solid'
import DarkMode from '../dark/DarkMode'
import NavLinks from './NavLinks'
import Search from './Search'
const Header = () => {
  return (
    <header className="dark:bg-slate-900 bg-orange-600 text-white shadow-sm">
      <div className="flex items-center justify-between p-10">
        <Link href="/" className="font-serif text-4xl">
          <span className="underline decoration-gray-200 decoration-2 pr-2 text-red-900">
            MGN
          </span>
          <span className="">News</span>
        </Link>
        <div className="space-x-5 flex items-center">
          <Bars4Icon className="h-6 w-6 cursor-pointer" />
          <DarkMode />
        </div>
      </div>
      <NavLinks />
      <Search />
    </header>
  )
}

export default Header
