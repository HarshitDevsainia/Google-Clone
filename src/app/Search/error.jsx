'use client'
import Pagination from "@/Components/Pagination";
import { useEffect } from "react";

export default function Error({error,reset}) {
    useEffect(()=>{
        console.log('error',error);
    },[error]);
  return (
    <div className="flex flex-col justify-between items-center w-full pt-10 space-y-2">
        <h1 className="text-2xl text-center">Something Went Wrong!</h1>
        <button className="text-xl text-blue-500 hover:underline">
            Try Again
        </button>
    </div>
  );
}
