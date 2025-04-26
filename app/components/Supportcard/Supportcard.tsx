
export  const Supportcard = ({icons,tittle,descripation})=>{
    return(
        <div className="bg-[#DDC7BB]">
            <div>{icons}</div>
            <div><h1 className="text-2xl text-[#2B1B12]">{tittle}</h1></div>
            <div><p className="text-2xl text-[#2B1B12]">{descripation}</p></div>
        </div>
    )
}