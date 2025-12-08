import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchBar from './SearchBar'

function Navbar() {
  return (
    <nav className='flex items-center justify-between border-b border-gray-200 pb-4'>
      {/* LEFt  */}
      <Link href="/" className='flex items-center'>
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={36} 
          height={36} 
          className='w-6 h-6 md:w-9 md:h-9'
        />
        <p className='hidden md:block text-base font-medium tracking-wider'>TRENDLAMA.</p>
      </Link>

      {/* RIGHT  */}
      <div className=''>
        <SearchBar />
      </div>
    </nav>
  )
}

export default Navbar
