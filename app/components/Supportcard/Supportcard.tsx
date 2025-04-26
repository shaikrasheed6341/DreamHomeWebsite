import React from "react"

export interface info{
    icons :React.ReactNode;
    tittle:string;
    descripation:string;
}
export  const Supportcard:React.FC<info> = ({icons,tittle,descripation})=>{
    return(
        <div >
        <div className="bg-[#DDC7BB] p-4 rounded-xl">
            <div className="bg-gray-100 w-max rounded-sm text-[#2B1B12] my-2  text-5xl ">{icons}</div>
            <div><h1 className="text-2xl my-3 font-bold text-[#2B1B12]">{tittle}</h1></div>
            <div><p className="text-md text-wrap text-[#2B1B12]">{descripation}</p></div>
        </div>
        </div>
    )
}