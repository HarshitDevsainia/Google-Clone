import React from 'react';
import CountryLookup from './CountryLookup'

export default function Footer() {
  return (
    <footer className='w-full absolute bottom-0 text-sm bg-[#f2f2f2]'>
        <div className="border-b border-gray-300 px-8 py-3">
            <CountryLookup/>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
            <ul className='flex space-x-6 items-center'>
                <li className='hover:underline cursor-pointer'>About</li>
                <li className='hover:underline cursor-pointer'>Advertising</li>
                <li className='hover:underline cursor-pointer'>Bussiness</li>
                <li className='hover:underline cursor-pointer'>How Search Work</li>
            </ul>
            <ul className='flex space-x-6 items-center'>
                <li className='hover:underline cursor-pointer'>Privacy</li>
                <li className='hover:underline cursor-pointer'>Terms</li>
                <li className='hover:underline cursor-pointer'>Settings</li>
            </ul>
        </div>
    </footer>
  )
}
