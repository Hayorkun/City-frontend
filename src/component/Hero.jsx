import { NavLink } from "react-router-dom";
import Images from "../assets/Images";
import BookingBar from "./BookingBar";

const Hero = () => {
  return (
    <section className="md:px-10 bg-[#f1efea] dark:bg-gray-900 min-h-0 md:min-h-screen w-full text-black dark:text-white">
        <div className="hidden md:block max-w-360 mx-auto">
          <div className="flex items-start py-25 gap-12 mb-10">
            <div className="space-y-2.5 flex-[45%] flex flex-col">
              <p className="text-base font-bold font-body text-[#B5935B]">
                Lagos, Nigeria
              </p>
              <h1 className="font-heading font-bold text-7xl max-w-lg leading-tight tracking-normal">
                A Quiet Place in the Heart of the City
              </h1>
              <p className="text-base font-light leading-relaxed max-w-md mb-8">
                CityLounge is a boutique hotel offering signature suites, fine
                dining and thoughtful service for those who seek comfort and
                elegance.
              </p>
              <div className="flex items-center gap-5">
                <NavLink to="/rooms" className="bg-black dark:bg-[#967e56] text-[#f9f8f6] dark:text-white rounded-xs px-6 py-2 text-sm font-body leading-relaxed hover:scale-105 transition-transform ease-linear duration-150">
                  Explore Rooms
                </NavLink>
                <button className="border border-black dark:border-[#967e56] text-black dark:text-[#f9f8f6] rounded-xs px-6 py-2 text-sm font-body leading-relaxed hover:scale-105 transition-transform ease-linear duration-150">
                  Our Story
                </button>
              </div>
            </div>
            <div className="flex flex-[55%] w-full h-120">
              <img
                src={Images.Roomview}
                alt="Room view image"
                className="object-cover w-full h-full object-center"
              />
            </div>
          </div>
          <BookingBar />
        </div>
      <div className="md:hidden w-full bg-[#f1efea] dark:bg-gray-900">
        <div
          className="min-h-[calc(100svh-9rem)] w-full"
          style={{
            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.90), rgba(0,0,0,0)), url(${Images.Roomview})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="min-h-[calc(100svh-9rem)] flex flex-col justify-end px-5 pb-10">
            <p className="text-sm font-bold font-body text-white mb-3">
              Lagos, Nigeria
            </p>
            <h1 className="text-white font-heading font-bold text-4xl sm:text-5xl max-w-lg leading-tight tracking-normal">
              A Quiet Place in the Heart of the City
            </h1>
            <p className="text-sm text-white/90 leading-relaxed mt-4 max-w-sm">
              Signature suites, fine dining and thoughtful service in the heart
              of Lagos.
            </p>
            <NavLink to="/rooms" className="w-fit mt-5 bg-white text-black rounded-xs px-5 py-2.5 text-sm font-body font-semibold">
              Explore Rooms
            </NavLink>
          </div>
        </div>
        <BookingBar />
      </div>
    </section>
  );
};

export default Hero;
