import Link from "next/link";
import Pagination from "./Pagination";
export default function WebSearchResult({result}) {
    console.log(result);
    return(
        <div className="w-full sm:pb-24 mx-auto sm:pl-[5%] md:pl-[14%] lg:pl-52 px-3 pb-40">
            <p className="text-gray-600 text-sm mb-5 mt-3">
                About {result.searchInformation && result.searchInformation.formattedTotalResults} Result {result.searchInformation && result.searchInformation.formattedSearchTime} seconds
            </p>
            {result.items && result.items.map((item)=>(
               <div className="mb-8 max-w-xl" key={item.link}>
                  <div className="group flex flex-col">
                    <Link href={item.link}>{item.link}</Link>
                    <Link href={item.link} className="group-hover:underline text-blue-800 text-xl truncate font-medium ">{item.title}</Link>
                    <p className=" text-gray-600">
                        {item.title}
                    </p>
                  </div>
               </div>
            ))}
            <Pagination/>
        </div>
    )
}