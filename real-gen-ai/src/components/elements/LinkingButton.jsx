import Link from "next/link";
import { ReactNode } from "react";



export default function LinkingButton(
    href,
    children,
    className,
){
    return(
        <>
            <Link href={href} className={`cursor-pointer bg-blue-950 text-white px-8 py-3 rounded-full text-lg sm:text-xl font-medium shadow-xl hover:bg-blue-800 transition duration-300 ease-in-out transform focus:outline-none focus:ring-4 focus:ring-blue-300 ${className}`}>
              {children}
            </Link>
        </>
    )
}