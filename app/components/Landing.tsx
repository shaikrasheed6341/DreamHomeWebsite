import Image from "next/image";
import Landingimage from "../../public/Landingpage.png";

const Landing = () => {
  return (
    <div className="min-h-screen bg-[#FEF7F2] flex items-center justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="p-6 sm:p-10 text-center md:text-left">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#2B1B12] leading-tight mb-6">
              Find your <br /> Dream Home
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-[#2B1B12] font-semibold mb-8 leading-relaxed">
              Explore our curated selection of exquisite <br />
              properties meticulously tailored to your <br />
              unique dream home vision
            </p>
            <button className="bg-[#2B1B12] text-white px-6 py-3 rounded-xl text-sm sm:text-base font-semibold hover:bg-zinc-900 transition-colors">
              Contact Us
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-center md:justify-end">
            <Image
              src={Landingimage}
              alt="Landing page"
              width={500}
              height={500}
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;