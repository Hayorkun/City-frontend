import { Menu, Moon, Sun, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import useTheme from "../context/useTheme";

const Navbar = () => {
  const [sideBarOpen, setSideBarOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const navlinks = [
    {
      title: "Rooms",
      path: "/rooms",
    },
    {
      title: "Dining",
      path: "/suite-residence",
    },
    {
      title: "Experiences",
      path: "/experience",
    },
    {
      title: "Location",
      path: "/location",
    },
  ];

  return (
    <nav className=" z-30 px-5 md:px-10 py-4 dark:bg-gray-900 dark:text-white bg-white text-black border-b border-gray-300 dark:border-gray-600 sticky top-0">
      <div className="flex items-center justify-between max-w-360 mx-auto">
        <div className="flex gap-2">
        <h1 className="font-heading font-bold text-2xl md:text-3xl">
          City
          <span className="text-[#B5935B] text-xl font-extrabold">Lounge</span>
        </h1>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <ul className="flex gap-5">
          {navlinks.map((n) => (
            <li key={n.path}>
              <NavLink
                to={n.path}
                className="font-body font-medium leading-relaxed text-sm hover:bg-[#B5935B] hover:text-[#f9f8f6] py-1.5 px-2.5 rounded-md transition-all ease-linear duration-200"
              >
                {n.title}
              </NavLink>
            </li>
          ))}
        </ul>
       <div className="flex items-center">
         <button className="bg-black dark:bg-[#967e56] text-[#f9f8f6] dark:text-white rounded-md px-2.5 py-1.5 text-xs font-body leading-relaxed hover:bg-[#e5e5e5] hover:text-black transition-all ease-linear duration-200">
          Book Your Stay
        </button>
         <button
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        className="w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-colors ease-linear duration-150"
      >
        {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
      </button>
       </div>
      </div>
     <div className="md:hidden flex items-center gap-1">
       <button
        onClick={toggleTheme}
        aria-label="Toggle color theme"
        className="md:hidden w-10 h-10 flex items-center justify-center cursor-pointer rounded-md transition-colors ease-linear duration-150"
      >
        {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
      </button>
      <button
        onClick={() => setSideBarOpen(!sideBarOpen)}
        aria-label={sideBarOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={sideBarOpen}
        className="md:hidden w-10 h-10 flex items-center justify-center rounded-md"
      >
        {sideBarOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
     </div>
      {sideBarOpen && (
        <>
          <div
            onClick={() => setSideBarOpen(false)}
            className="fixed inset-x-0 top-16.25 bottom-0 bg-black/50 backdrop-blur-sm z-40 cursor-pointer"
          />
          <div
            className="fixed top-16.25 right-0 bottom-0 z-50 w-[min(82vw,320px)] overflow-y-auto bg-white px-5 py-6 shadow-2xl dark:bg-gray-900 dark:text-white"
          >
            <div className="flex flex-col gap-8">
              <ul className="flex flex-col gap-2">
                {navlinks.map((n) => (
                  <li key={n.path} className="w-full border-b border-gray-200 dark:border-gray-700">
                    <NavLink
                      to={n.path}
                      onClick={() => setSideBarOpen(false)}
                      className="block w-full rounded-md px-3 py-3 font-body font-medium transition-colors ease-linear duration-200 hover:bg-[#B5935B] hover:text-white"
                    >
                      {n.title}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <NavLink to="/booking" className="w-full flex justify-center rounded-sm bg-black px-5 py-3 text-sm font-body font-medium leading-relaxed text-white transition-colors ease-linear duration-200 hover:bg-[#B5935B] dark:bg-[#967e56]">
                Book Your Stay
              </NavLink>
            </div>
          </div>
        </>
      )}
      </div>
    </nav>
  );
};

export default Navbar;
