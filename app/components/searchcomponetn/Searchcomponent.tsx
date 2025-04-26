import { FaLocationDot } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";



export const SearchComponent = () => {
    return (
        <div className="bg-[#FEF7F2]">
            <div className="  mx-20  ">
                <div className="bg-[#DDC7BB] rounded-3xl py-6">
                    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <div>
                                <div className="flex relative">
                                    <FaLocationDot className="absolute right-4 mt-3  text-2xl text-[#2B1B12] " />
                                    <input
                                        type="text"
                                        placeholder="Location"
                                        className="w-full bg-[#FBF5F1] px-5 py-3 rounded-2xl text-[#2B1B12] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#Ffffff]"
                                    />


                                </div>
                            </div>
                            <div>
                                <div className="flex relative">
                                    <FaHome className=" absolute right-4 mt-3 text-2xl text-[#2B1B12]" />
                                    <input
                                        type="text"
                                        placeholder="Property Type"
                                        className="w-full bg-[#FBF5F1] px-5 py-3 rounded-2xl text-[#2B1B12] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#Ffffff]"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex relative">
                                      <FaSackDollar className=" absolute right-4 mt-3  text-2xl text-[#2B1B12] " />
                                    <input
                                        type="text"
                                        placeholder="Budget"
                                        className="w-full bg-[#FBF5F1] px-5 py-3 rounded-2xl text-[#2B1B12] text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-[#ffffff]"

                                    />
                                </div>
                            </div>


                            <div className="flex items-center">
                                <button
                                    type="button"
                                    className="w-full bg-[#2B1B12] text-white px-5 py-3 rounded-2xl text-sm sm:text-base font-semibold "
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};