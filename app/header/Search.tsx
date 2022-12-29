'use client '

import { useRouter } from 'next/navigation'
import React, { FormEvent, useState } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

const Search = () => {
  const [input, setInput] = useState('')
  const router = useRouter()
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search/${input.toLowerCase()}`)
  }
  return (
    <form
      onSubmit={submitHandler}
      className="mx-auto flex items-center justify-between bg-white px-5 py-2 dark:bg-slate-800 dark:text-gray-50"
    >
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search topic ..."
        className="h-10 w-full flex-1 rounded-sm bg-gray-200 p-4 text-slate-800 outline-none placeholder:text-xs dark:bg-slate-700 dark:text-white"
      />
      <button
        disabled={!input}
        type="submit"
        className="bg-orange-600 text-white disabled:bg-gray-500 cursor-pointer"
      >
        <MagnifyingGlassIcon className="w-7 h-10" />
      </button>
    </form>
  )
}

export default Search
