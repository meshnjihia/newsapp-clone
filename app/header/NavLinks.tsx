"use client";
import React from 'react'
import { Categories } from '../constants/categories'
import NavItems from './NavItems'
import {usePathname} from 'next/navigation'

const NavLinks = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    const newPath: any = pathname?.split('/').pop();
  }
  return (
    <nav className='flex items-center justify-center space-x-8 overflow-x-scroll border-b bg-white text-slate-800 scrollbar-hide dark:bg-slate-800 dark:text-gray-300'>
      {Categories.map((category, index, number) => (
        <NavItems
          key={index}
          category={category}
          isActive={isActive(category)}
        />
      ))} 
    </nav>
  )
}

export default NavLinks