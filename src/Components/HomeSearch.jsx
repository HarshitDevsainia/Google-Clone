'use client'
import React from 'react'
import { AiOutlineSearch } from "react-icons/ai";
import { BsMicFill } from "react-icons/bs";
import { useState } from 'react';
import {useRouter} from 'next/navigation';

export default function HomeSearch() {
  const[input,setInput]=useState('');
  const [randomSearch,setRandomSearch]=useState(false);
  const router=useRouter();
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(!input.trim())return;
    router.push(`/Search/web?searchTerm=${input}`);
  }
  const RandomSearch=async(e)=>{
     e.preventDefault();
     setRandomSearch(true);
     const res=await fetch('https://random-word-api.herokuapp.com/word')
     .then((res)=>res.json())
     .then((data)=>data[0])
     if(!res)return;
     router.push(`/Search/web?searchTerm=${res}`);
     setRandomSearch(false);
  }
  return (
    <>
      <form onSubmit={handleSubmit} className='flex mt-5 w-full mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow sm:max-w-xl lg:max-w-2xl'>
           <AiOutlineSearch className='text-xl text-gray-500 mr-3'/>
           <input type="text" className='flex-grow focus:outline-none' onChange={(e)=>setInput(e.target.value)} />
           <BsMicFill className='text-xl'/>
       </form>
       <div className='flex flex-col space-y-2 sm:space-y-0 justify-center sm:flex-row sm:space-x-4 mt-8'>
         <button
          type='button'
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-500 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={handleSubmit}
         >Google Search</button>
         <button
          className='bg-[#f8f9fa] rounded-md text-sm text-gray-500 hover:ring-gray-200 focus:outline-none active:ring-gray-300 hover:shadow-md w-36 h-10 transition-shadow'
          onClick={RandomSearch}
         >{randomSearch ? 'Loading...' : 'I am Feeling Lucky'}</button>
       </div>
    </>
  )
}
