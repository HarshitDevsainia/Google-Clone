'use client'
import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { BsFillMicFill } from "react-icons/bs";
import {AiOutlineSearch} from 'react-icons/ai';
import { useSearchParams , useRouter , usePathname } from 'next/navigation';
export default function SearchBox() {
  const route=useRouter();
  const searchparams=useSearchParams();
  const searchTerm=searchparams.get('searchTerm');
  const [term,setTerm]=useState(searchTerm || '');
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!term.trim()){
      setTerm('');
      return;
    }
    route.push(`/Search/web?searchTerm=${term}`);
  }

  return (
    <form onSubmit={handleSubmit} className='flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-start'>
        <input type="text" className='w-full focus:outline-none' value={term} onChange={(e)=>setTerm(e.target.value)}/>
        <RxCross2 className='text-2xl text-gray-500 cursor-pointer sm:mr-2' onClick={()=>setTerm('')}/>
        <BsFillMicFill className='hidden sm:inline-flex text-2xl text-blue-500 border-1 mr-3 border-gray-300 cursor-pointer sm:mr-2'/>
        <AiOutlineSearch className='text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer sm:mr-2' onClick={handleSubmit}/>
    </form>
  )
}
