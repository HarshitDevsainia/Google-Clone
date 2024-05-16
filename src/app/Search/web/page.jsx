import Link from 'next/link';
export default async function WebSearchPage({searchParams}) {
  const res=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&:q=${searchParams.searchTerm}`);
  if(!res.ok){
    throw new Error('Something Wrong');
  }
  const data=await res.json();
  const result=data.items;
  if(!result){
    return(
      <div className="flex flex-col items-center justify-center mt-20 space-y-2">
          <h1 className=' text-center font-medium text-2xl'>No Result Found!</h1>
          <p className='text-center '>
             Try Searching the web or image for Something else {' '}
             <Link href={'/'} className=' text-blue-500 hover:underline'>Home</Link>
          </p>
      </div>
    )
  }
  return (
    <div>WebSearchPage</div>
  )
}
