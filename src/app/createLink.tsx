'use client'

import { createLink } from '@/actions/createLink'
import { useState } from 'react'

export default function CreateLinkInput() {
  const [link, setLink] = useState('')

  const handleAddLink = async () => {
    await createLink(link)

    setLink('')
  }

  return (
    <div className="flex flex-col w-96">
      <label
        htmlFor="price"
        className="block text-sm/6 font-medium text-gray-900"
      >
        Link
      </label>
      <div className="mt-2">
        <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <input
            value={link}
            onChange={(e) => {
              setLink(e.target.value)
            }}
            id="price"
            name="price"
            type="text"
            placeholder="https://example.com"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          />
        </div>
      </div>

      <button
        className="mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddLink}
        disabled={!link}
      >
        Create
      </button>
    </div>
  )
}
