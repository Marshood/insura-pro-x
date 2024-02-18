import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";
  
const inter = Inter({ subsets: ["latin"] });

export default function error() {
   return (
    <div className="flex justify-center flex-col">
      <h1>Not Found</h1>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
     </div>
  );
}
 
}
