import { Suspense } from 'react'

import { getLinks } from '@/actions/getLinks'
import Links from '@/app/Links'

export interface Link {
  id: string
  link: string
  shortCode: string
}

export default async function Example() {
  const links = getLinks()

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Links links={links} />
      </Suspense>
    </>
  )
}
