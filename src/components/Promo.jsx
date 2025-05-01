import React from 'react';
import { ArrowRight } from 'lucide-react'; // Importing ArrowRight icon from lucide-react

const PromoSection = () => {
  return (
    <div className="px-4 py-10 space-y-10">
      {/* Large Promo Banner */}
      <section className="bg-green-50 rounded-2xl p-6 sm:p-10 flex flex-col lg:flex-row items-center gap-6 shadow-md relative overflow-hidden">
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
            ELEVATE YOUR WARDROBE <br /> WITH OUR FASHION FINDS
          </h2>
          <p className="mt-2 text-gray-600 text-sm md:text-base max-w-md">
            Discover your signature look from a wide range of curated outfits and modern classics.
          </p>
          <div className="mt-4">
            <button className="bg-black text-white w-40 px-6 py-4 rounded-full hover:bg-gray-700 transition flex items-center justify-center gap-2">
              SHOP NOW
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <img
            src="https://images.pexels.com/photos/983569/pexels-photo-983569.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Fashion Model"
            className="rounded-xl w-full h-[360px] object-cover shadow-lg"
          />
          <div className="absolute top-2 left-2 w-6 h-6 bg-black rounded-full"></div>
        </div>
      </section>

      {/* New Motivational Section */}
      <section className="text-center py-10">
        <h2 className="text-2xl md:text-4xl font-bold">
          <span className="text-green-500">Your Style. </span>
          <span className="text-black">Your Rules. </span>
          <span className="text-green-500">Empower Your Fashion</span>
        </h2>
      </section>
    </div>
  );
};

export default PromoSection;
