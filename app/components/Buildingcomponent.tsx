import { FaLocationDot } from "react-icons/fa6";

interface Building {
  place: string;
  rooms: string;
  squarefeet: string;
  price?: string | null;
  proparty?:string // Optional to support API
}

export default function BuildingComponent({ place, rooms, squarefeet, price ,proparty}: Building) {


  return (
    <div className="bg-[#ecdddd9f] rounded-lg shadow-md p-4 transition duration-300 hover:shadow-lg">
      <h2 className="text-xl font-bold text-gray-900 mb-3 ">
        <FaLocationDot className="inline mr-2 mb-2 " />
        {place}
      </h2>
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm font-bold text-md ">Rooms:</span>
          <span className="text-gray-800 font-semibold text-md">{rooms}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-gray-600 text-sm font-bold">Area:</span>
          <span className="text-gray-800 font-semibold text-md">{squarefeet}</span>
        </div>

      </div>
        <div className=" items-center space-x-2">
          <span className="text-gray-600 text-sm font-bold">Propartiy:</span>
          <span className="text-gray-800 font-semibold text-md">{proparty}</span>
        </div>
      {price !== undefined && (
        <div className="mt-3 flex items-center space-x-2">
          <span className="text-gray-600 text-sm">Price:</span>
          {price ? (
            <span className="text-green-600 font-semibold text-lg">{price}</span>
          ) : (
            <span className="text-gray-500 italic text-sm">Not available</span>
          )}
        </div>
      )}
      <div className="mt-4">

      </div>
    </div>
  );
}