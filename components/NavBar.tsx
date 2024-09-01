import Link from 'next/link'
import React from 'react'

export default function NavBar() {
  return (
    <div className='flex gap-x-6'>
      <Link href="/">Home</Link>
      <Link href="/blog">BLogs</Link>
      <Link href={'/blog/1'}>Blog/id</Link>
      <Link href={'/contact/1'}>Contact/id</Link>
    </div>
  )
}
