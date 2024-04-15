import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="">
      <Image src="/uberbanner.webp" width={900} height={1000} className="object-contain h-full w-full"/>
      <div className="absolute top-20 right-0">
      <SignUp />
      </div>
        
      </div>
    </>
  );
}
