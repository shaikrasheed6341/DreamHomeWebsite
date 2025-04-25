"use client"
import { FaSearch } from "react-icons/fa";
import Link from "next/link";
const Navbar= ()=>{
    const lists =[{id:1,value:"Home" },{id:2,value:"Service"},{id:3,value:"Agent"},{id:4,value:"Contact"}];
    return(
        <nav className="flex  justify-between bg-[#FEF7F2] mx-7   sticky p-3">
            <div> <Link href={"/"} >logo </Link>  </div>,
            <ul className="space-x-8  text-[#2B1B12] flex    ">
               {lists.map(list =>  <li  className="font-semibold" key={list.id}>{  list.value}</li>)}
               
            </ul>
            <div className="flex space-x-10">
                <div className="text-[#2B1B12] mt-2 "><FaSearch className="text-xl" /></div>
                <div><button className="text-white px-5 py-2 rounded-xl text-sm bg-[#2B1B12]  " > <Link href={"/signup"}>Signup</Link> </button></div>

            </div>

        </nav>
    )
} 

export default Navbar;