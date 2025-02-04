'use server'

import { getLinks } from "@/actions/getLinks"

export interface Link {
  id: string
  link: string
  shortCode: string
}

export default async function Example() {

  const links = await getLinks()

  return (
    <ul role="list" className="divide-y divide-gray-100">
      {links.map((link:Link) => (
        <li key={link.id} className="flex justify-between gap-x-6 shadow-lg p-4 rounded-lg">

          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm/6 font-semibold text-gray-900">{link.link}</p>
              <p className="mt-1 truncate text-xs/5 text-gray-500">{link.id}</p>
            </div>
          </div>

          <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
            <b className="text-sm/6 text-blue-600">{link.shortCode}</b>
            <div className="mt-1 flex items-center gap-x-1.5">
                <div className="flex-none rounded-full bg-emerald-500/20 p-1">
                  <div className="size-1.5 rounded-full bg-emerald-500" />
                </div>
                <p className="text-xs/5 text-gray-500">Online</p>
              </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
