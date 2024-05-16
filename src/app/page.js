import Image from "next/image";
import HomeHeader from "@/Components/HomeHeader";
import HomeSearch from '@/Components/HomeSearch';
 
export default function Home() {
  return (
    <>
      <HomeHeader/>
      <div className="flex flex-col items-center mt-20">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt='Google Logo'
          width={300}
          height={100}  
          priority
          style={{width:'auto'}}
        />
      <HomeSearch/>
      </div>
    </>
  );
}
