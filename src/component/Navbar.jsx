import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navlinks = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Lounge & Bar",
      path: "/Lounge-bar",
    },
    {
      title: "Lodging",
      path: "/lodging",
    },
    {
      title: "Location",
      path: "/location",
    },
    {
      title: "Gallery",
      path: "/gallery",
    },
    {
      title: "Events",
      path: "/events",
    },
    {
      title: "Career",
      path: "/career",
    },
  ];

  const authBtn = ["Login", "Registar"];

  return (
    <nav className="px-5 py-4 dark:bg-gray-900 dark:text-white bg-white text-black flex items-center justify-between">
      <h1 className="font-heading font-bold text-3xl">
        City
        <span className="text-[#B5935B] text-xl font-extrabold">Lounge</span>
      </h1>
      <div className="flex items-center gap-8">
        <ul className="flex gap-5 md:mr-25">
          {navlinks.map((n) => (
            <li key={n.path}>
              <NavLink
                to={n.path}
                className="font-body font-medium text-shadow-lg hover:bg-[#B5935B] p-2 rounded-sm"
              >
                {n.title}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="flex gap-3">
          {authBtn.map((b) => (
            <button
              key={b}
              className="border border-[#D4C7B5] rounded-sm px-4 py-1.5 text-sm font-body font-medium leading-relaxed hover:bg-[#B5935B] hover:border-[#B5935B]"
            >
              {b}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
