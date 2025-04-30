import Image from "next/image";
import Landingimage from "../../public/Landingpage.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F2]  flex items-center justify-center py-12 md:py-16 lg:py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Section */}
          <div className="p-6 sm:p-8 lg:p-10 text-center lg:text-left">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2B1B12] leading-tight mb-4 sm:mb-6">
              Find Your <br /> Dream Home
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#2B1B12] font-medium mb-6 sm:mb-8 leading-relaxed max-w-md mx-auto lg:mx-0">
              Explore our curated selection of exquisite properties, meticulously tailored to your unique dream home vision.
            </p>
            <button className="bg-[#2B1B12] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-sm sm:text-base lg:text-lg font-semibold hover:bg-[#3A2A1F] transition-colors duration-300 shadow-md">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
            <Image
              src={Landingimage}
              alt="Landing page"
              width={900}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl "
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;