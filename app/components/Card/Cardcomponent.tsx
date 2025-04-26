import React from 'react';
import Image from 'next/image';
import cardImage from '../../../public/card.png'; // Assumes card.png is in public/card.png

const Cardcomponent = () => {
  return (
    <section className="bg-[#FEF7F2] py-10 px-4 sm:px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src={cardImage}
            alt="Dream home illustration"
            width={600}
            height={400}
            layout="responsive"
            className="rounded-lg"
          />
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center space-y-6 md:ml-6 lg:ml-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2B1B12] leading-tight">
            We Help You To <br /> Find Your Dream Home
          </h2>
          <p className="text-base sm:text-lg text-[#2B1B12] font-semibold">
            From cozy cottages to luxurious estates, our dedicated team guides you
            through every step of the journey, ensuring your dream home becomes a reality.
          </p>

          {/* Stats Section */}
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#2B1B12]">8K+</p>
              <p className="text-lg underline text-[#2B1B12]">Houses Available</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#2B1B12]">8K+</p>
              <p className="text-lg underline text-[#2B1B12]">Houses Sold</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold text-[#2B1B12]">8K+</p>
              <p className="text-lg underline text-[#2B1B12]">Trusted Agents</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cardcomponent;
