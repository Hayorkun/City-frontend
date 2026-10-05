import { useState } from "react";

const Rooms = () => {
  const [activeFilter, setActiveFilter] = useState("All Rooms");

  const filterBtn = [
    "All Rooms",
    "Suites",
    "King Rooms",
    "Twin Rooms",
    "Rooftop",
  ];

  return (
    <section className="px-5 md:px-10 py-5 md:py-15 bg-[#f9f8f6] dark:bg-gray-900 min-h-0 md:min-h-screen w-full text-black dark:text-white">
      <div className="max-w-360 mx-auto">
        <p
          className="font-body font-semibold
         leading-relaxed text-sm text-[#b29159] mb-1"
        >
          Accommodation
        </p>
        <h1 className="font-heading font-light text-3xl max-w-xs md:text-5xl leading-tight mb-3 tracking-wide md:tracking-tight">
          Discover Your Perfect Stay.
        </h1>
        <p className="font-body font-light leading-relaxed text-sm max-w-xl mb-10">
          Explore our curated selection of signature suites and refined rooms,
          each offering a unique perspective on Lagos luxury.
        </p>
        <div className="space-y-7">
          <div className="md:flex md:justify-between space-y-7 ">
            <div className="flex items-center gap-7 overflow-x-auto overflow-y-hidden [scrollbar-none] [&::-webkit-scrollbar]:hidden md:overflow-visible">
              {filterBtn.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`shrink-0 whitespace-nowrap font-body text-sm transition-colors duration-200 appearance-none ${
                    f === activeFilter
                      ? "dark:bg-[#B5935B] font-semibold bg-black text-white px-2 py-1 rounded-2xl"
                      : "text-[#747474] hover:text-[#B5935B] px-2.5 py-1 rounded-2xl border border-[#eeeded] dark:border-gray-600 hover:border-[#B5935B]"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="flex justify-between items-center">
              <p className="font-body text-xs tracking-tight font-normal text-gray-500 md:hidden">
                Showing 3 suites & rooms
              </p>
              <div className="flex items-center gap-1">
                <p className="text-xs font-body text-gray-600 dark:text-gray-300">
                  Sort by:
                </p>
                <select
                  name="sort"
                  id="sort"
                  className="bg-transparent outline-none cursor-pointer text-sm text-gray-600 dark:text-gray-300"
                >
                  <option value="recommended">Recommended</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div className="border"></div>
              <div className="border"></div>
              <div className="border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;
