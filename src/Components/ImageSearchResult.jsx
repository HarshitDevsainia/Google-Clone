import React from 'react'
import Link from 'next/link';
import Pagination from './Pagination';
export default function ImageSearchResult({result}) {
    console.log(result);
  return (
    <div className="sm:pb-24 pb-40 mt-4">
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 px-3 space-x-4">
            {result && result.map((res)=>(
                <div className="mb-8" key={result.link}>
                    <div className="group">
                        <Link href={res.image.contextLink}>
                            <img 
                                src={res.link} 
                                alt={res.title} 
                                className='h-60 group-hover:shadow-xl w-full object-contain transition duration-300'
                            />
                        </Link>
                        <Link href={res.image.contextLink}>
                            <h1 className='group-hover:underline truncate text-xl'>{res.title}</h1>
                        </Link>
                        <Link href={res.image.contextLink}>
                            <p className='group-hover:underline truncate text-gray-600'>{res.displaylink}</p>
                        </Link>
                    </div>
                </div>
            ))};
       </div>
       <Pagination/>
    </div>
  )
}
