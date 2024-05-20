import React, { startTransition } from 'react'
import Link from 'next/link';
import ImageSearchResult from '@/Components/ImageSearchResult';

export default async function ImageSearchPage({searchParams}) {
  const startIndex=searchParams.start||'1';
  await new Promise((resolve)=>setTimeout(resolve,1000));
  const res=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`);
  
  const data=await res.json();
  const result=data.items;
  if(!res.ok){
    throw new Error('Somthing went Wrong');
  }
  if(!result){
    return (
      <div className="flex flex-col mt-20 items-center justify-center space-y-2">
        <h1 className='text-xl font-medium text-center'>No Result Found</h1>
        <p className='text-center'>
          Try Searching the web or image for Something else {' '}
          <Link className='text-blue-600 hover:underline' href={'/'}>Home</Link>
        </p>
      </div>
    );
  }
  console.log(data); 
  return (
    <div className="">
      {result && <ImageSearchResult result={result}/>}
    </div>
  ) 
}
