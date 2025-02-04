'use client'

import { deleteLink } from '@/actions/deleteLink'
import { Link } from '@/app/example'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { use } from 'react'

const AWS_REDIRECT =
  'https://zutgvxqd4j.execute-api.ap-southeast-2.amazonaws.com/redirectLink'

export default function Links({ links }: { links: Promise<Link[]> }) {
  const allLinks = use(links)
  return (
    <>
      <ul role="list" className="divide-y divide-gray-100">
        {allLinks.map((link: Link) => (
          <li
            key={link.id}
            className="flex justify-between gap-x-6 shadow-lg p-4 rounded-lg"
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="text-sm/6 font-semibold text-gray-900">
                  {link.link}
                </p>
                <p className="mt-1 truncate text-xs/5 text-gray-500">
                  {link.id}
                </p>
              </div>
            </div>

            <a
              target="_blank"
              href={`${AWS_REDIRECT}?id=${link.id}`}
              className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"
            >
              <b className="text-sm/6 text-blue-600">{link.shortCode}</b>
              <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
            </a>

            <button
              onClick={async () => {
                await deleteLink(link.id)
              }}
            >
              <XCircleIcon className="text-red-500 w-8 cursor-pointer" />
            </button>
          </li>
        ))}
      </ul>
    </>
  )
}
