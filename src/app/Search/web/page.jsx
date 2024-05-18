import Link from 'next/link';
import WebSearchResult from '@/Components/WebSearchResult';
export default async function WebSearchPage({searchParams}) {
  const res=await fetch(`https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&:q=${searchParams.searchTerm}`);
  console.log(res.ok);
  if(!res.ok){
    throw new Error('Something went Wrong');
  }
  const data=await res.json();
  const result=data.items;
  console.log(result);
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
    <div>{result && <WebSearchResult result={data}/>}</div>
  )
}
