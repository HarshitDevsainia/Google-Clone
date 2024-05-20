'use client'

import { usePathname, useSearchParams } from "next/navigation"
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import Link from "next/link";

export default function Pagination() {
  const Pathname=usePathname();
  const searchParams=useSearchParams();
  const searchTerm=searchParams.get('searchTerm');
  const startIndex= +searchParams.get('start')||1;

  return (
    <div className="text-blue-700 flex px-10 pb-4 justify-between sm:justify-start sm:space-x-44">
        {startIndex>=10 &&
          <Link href={`${Pathname}?searchTerm=${searchTerm}&start=${startIndex-10}`}>
           <div className="flex flex-col items-center hover:underline">
               <BsChevronLeft/>
               <p>Previous</p>
           </div>
          </Link>
        }
        {startIndex<=90 &&
          <Link href={`${Pathname}?searchTerm=${searchTerm}&start=${startIndex+10}`} className="">
            <div className="flex flex-col items-center hover:underline">
                <BsChevronRight/>
                <p>Next</p>
            </div>
          </Link>
        }
    </div>
  )
}
