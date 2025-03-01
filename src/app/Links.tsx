'use client'

import { deleteLink } from '@/actions/deleteLink'
import { Link } from '@/app/example'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { XCircleIcon } from '@heroicons/react/20/solid'
import { use } from 'react'

const AWS_REDIRECT =
  'https://zutgvxqd4j.execute-api.ap-southeast-2.amazonaws.com/redirectLink'

export default function Links({ links }: { links: Promise<Link[]> }) {
  const allLinks = use(links)
  return (
    <div className="overflow-x-auto rounded-lg shadow-lg">
      <Table>
        <TableHeader className="bg-slate-200 px-4">
          <TableRow>
            <TableHead className="w-[100px]">Link</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Short Code</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allLinks.map((link: Link) => (
            <TableRow key={link.id}>
              <TableCell className="font-medium">{link.link}</TableCell>
              <TableCell>{link.id}</TableCell>
              <TableCell>
                <a
                  target="_blank"
                  href={`${AWS_REDIRECT}?id=${link.id}`}
                  className="text-blue-600"
                >
                  {link.shortCode}
                </a>
              </TableCell>
              <TableCell className="text-right">
                <button
                  onClick={async () => {
                    await deleteLink(link.id)
                  }}
                >
                  <XCircleIcon className="text-red-500 w-8 cursor-pointer" />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
