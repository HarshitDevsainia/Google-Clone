'use client'
import React, { useEffect, useState } from 'react';
import { AiFillCamera, AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai';
import { usePathname ,useSearchParams , useRouter} from 'next/navigation';
export default function SearchHeaderOptions() {
  const route=useRouter();
  const pathname=usePathname();
  const searchParams =useSearchParams();
  const searchTerm=searchParams.get('searchTerm');
  const selectTab=(tab)=>{
    route.push(`/Search/${tab==='Images'?'image':'web'}?searchTerm=${searchTerm}`)
  }
  return (
    <div className="flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm">
        <div onClick={()=>selectTab('web')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname==='/Search/web' && '!text-blue-600 !border-blue-600'}`}>
          <AiOutlineSearch/>
          <p>All</p>
        </div>
        <div onClick={()=>selectTab('Images')} className={`flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 ${pathname==='/Search/image' && '!text-blue-600 !border-blue-600'}`}>
          <AiOutlineCamera/>
          <p>Images</p>
        </div>
    </div>
  )
}
