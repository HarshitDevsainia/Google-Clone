import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";
import SearchBox from "../Components/SearchBox"

export default function SearchHeader() {
  return (
    <header className='sticky top-0 bg-white'>
      <div className="flex items-center justify-between w-full p-6">
          <Link href={'/'}>
            <Image
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png'
              alt='Google-logo'
              width={120}
              height={40}
              priority
              style={{width:'auto'}}
            />
          </Link>
          <div className="flex-1">
              <SearchBox/>
          </div>
          <div className="hidden sm:inline-flex space-x-2">
              <RiSettings3Line className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
              <TbGridDots className='bg-transparent hover:bg-gray-200 p-2 text-4xl rounded-full cursor-pointer'/>
          </div>
          <button 
            type='button'
            className='px-6 ml-2 py-2 bg-blue-500 rounded-md text-white font-medium hover:brightness-100 hover:shadow-md transition-shadow'
          >Signin</button>
      </div>
    </header>
  )
}
