
import { FaUser, FaPhoneAlt } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";

export const SudmitCard = () => {
    return (
        <div className=" flex justify-center my-5">
            <div className="bg-[#DDC7BB] w-max p-10 rounded-2xl">
                <p className="font-bold text-center my-3 p-3 text-4xl text-[#2B1B12]">Contact Us</p>
                <div className="div flex relative  ">
                    <div><FaUser className=" flex absolute text-2xl mt-2  right-3 text-[#2B1B12]" /></div>
                 <div>   <input className="py-3 px-5  bg-[#FBF5F1]  rounded-xl w-80 " placeholder="Name" /> </div>

                </div>
                <div className="div flex relative  my-5 ">
                    <div><MdOutgoingMail className=" flex absolute text-2xl mt-2  right-3 text-[#2B1B12]" /></div>
                 <div>   <input className="py-3 px-5  bg-[#FBF5F1]  rounded-xl w-80 " placeholder="Gmail" /> </div>

                </div>
                <div className="div flex relative  mb-7  ">
                    <div><FaPhoneAlt className=" flex absolute text-2xl mt-2  right-3 text-[#2B1B12]" /></div>
                 <div>   <input className="py-3 px-5  bg-[#FBF5F1]  rounded-xl w-80 " placeholder="Phone" /> </div>

                </div>
                <div className="flex justify-center "> <button className="py-2 bg-[#2B1B12] px-6 rounded-xl text-white  font-semibold ">Sudmit</button>
                </div></div>
        </div>
    )
}