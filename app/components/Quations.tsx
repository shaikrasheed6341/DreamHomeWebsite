import { FaCheckCircle } from "react-icons/fa";

export const Quations = ()=>{
    
    return(
        <div>
         <div className="  text-center mt-20"><p className="text-5xl text-[#2B1B12] font-bold ">Do You Have Any Questions?</p></div>
          <div className="my-4">
            <p className="text-5xl text-center text-[#2B1B12] font-bold">Get help from us</p>
            </div>
            <div className="div flex justify-center space-x-40 my-10">
            <div className="div flex"><div><FaCheckCircle className="mt-1 mx-2 text-[#2B1B12]" /></div> <p className="font-semibold text-md text-[#2B1B12]">Chat live with our support team</p></div>
            <div className="div flex"><div><FaCheckCircle className="mt-1 mx-2 text-[#2B1B12]" /></div>< p className="font-semibold text-md text-[#2B1B12]">Browse our FAQ</p></div>
            </div>
          </div>
    )
}