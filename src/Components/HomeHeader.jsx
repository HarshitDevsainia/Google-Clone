
import Link from 'next/link';
import { TbGridDots } from "react-icons/tb";
export default function HomeHeader() {
    return (
        <>
           <header className='flex justify-end p-5 text-sm'>
                <div className=" flex items-center space-x-4">
                    <Link href={'https://mail.google.com'} className=' hover:underline'>
                        Gmail
                    </Link>
                    <Link href={'https://www.google.com'} className=' hover:underline'>
                        Images
                    </Link>
                    <TbGridDots className='bg-transparent hover:bg-gray-200 rounded-full p-2 text-4xl'/>
                    <button className=' bg-blue-500 px-6  py-2 text-white rounded-md font-medium hover:brightness-100 hover:shadow-md transition-shadow '>Sign in</button>
                </div>
           </header>
        </>
    )
}