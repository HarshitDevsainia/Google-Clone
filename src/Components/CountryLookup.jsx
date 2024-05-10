'use client'
import React, { useEffect, useState } from 'react'

export default function India() {
    const [country,setCountry]=useState('');
    useEffect(()=>{
       const getCountry=async()=>{
           const res=await fetch(`https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`)
           .then((data)=>data.json())
           .then((data)=>data.country);
           if(!res){
             return;
           }
           setCountry(res);
       };
       getCountry();
    },[]);
  return (
    <div className="">{country}</div>
  )
}
