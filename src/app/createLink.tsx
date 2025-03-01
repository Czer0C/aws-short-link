'use client'

import { createLink } from '@/actions/createLink'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useState } from 'react'

export default function CreateLinkInput() {
  const [link, setLink] = useState('')

  const handleAddLink = async () => {
    await createLink(link)
    setLink('')
  }

  return (
    <div className="flex flex-col w-96 my-4">
      <Label htmlFor="link" className="block text-sm font-medium text-gray-900">
        Link
      </Label>
      <div className="mt-2">
        <Input
          value={link}
          onChange={(e) => setLink(e.target.value)}
          id="link"
          name="link"
          type="text"
          placeholder="https://example.com"
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
      <Button
        className="mt-4 bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleAddLink}
        disabled={!link}
      >
        Create
      </Button>
    </div>
  )
}
