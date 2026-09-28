import { motion } from "framer-motion";
import { IconCurrencyNaira } from "@tabler/icons-react";
import { NavLink } from "react-router-dom";

const OurRooms = () => {
  const Rooms = [
    {
      title: "The Grand Suite",
      image:
        "https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_baf1d4d9de_8b124969928a28b5.jpg",
      price: 125,
      desc: "A spacious corner suite with panoramic views, a private lounge, and a deep soaking tub",
      path: "/rooms",
    },
    {
      title: "Rooftop Villa",
      image:
        "https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_53575bd44b_048a5ecc999e5c75.jpg",
      price: 210,
      desc: "An executive rooftop retreat with a private terrace, plunge pool, and dedicated concierge",
      path: "/rooms",
    },
    {
      title: "Twin Haven",
      image:
        "https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_28849b2f3c_742fc88e496ad23b.jpg",
      price: 85,
      desc: "Two comfortable queen beds, ideal for friends or colleagues sharing a refined stay",
      path: "/rooms",
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.08,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 md:px-10 py-10 md:py-15 bg-[#f9f8f6] dark:bg-gray-900 text-black dark:text-white w-full min-h-0 md:min-h-fit">
      <div className="max-w-360 mx-auto">

        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="font-body font-bold text-base leading-relaxed text-[#B5935B]"
          >
            Accommodation
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex justify-between items-center mb-7"
          >
            <h2 className="font-heading font-light text-3xl md:text-5xl leading-tight tracking-wide">
              Our Signature Rooms
            </h2>

            <p className="max-w-sm font-body leading-relaxed text-base text-[#747474] hidden md:block">
              Each room is designed with warmth and intentions, blending
              modern comfort with timeless elegance.
            </p>
          </motion.div>
        </motion.div>

        {/* Room Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
        >
          {Rooms.map((r) => (
            <motion.div
              key={r.title}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: {
                  duration: 0.25,
                  ease: "easeOut",
                },
              }}
              className="rounded-xl overflow-hidden bg-[#ffff] dark:bg-gray-800/50 shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <motion.div
                variants={imageVariants}
                className="overflow-hidden"
              >
                <motion.img
                  src={r.image}
                  alt={r.title}
                  loading="lazy"
                  fetchPriority="low"
                  whileHover={{
                    scale: 1.04,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  }}
                  className="w-full h-fit object-cover aspect-3/2"
                />
              </motion.div>

              {/* Content */}
              <div className="px-4 py-5 w-full h-fit">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-heading text-2xl font-normal leading-tight">
                    {r.title}
                  </h3>

                  <p className="flex items-center text-[#B5935B] font-body leading-relaxed font-semibold">
                    <IconCurrencyNaira className="-mr-1" />
                    {r.price}k
                    <span className="text-[#9ca3af] font-normal">
                      /night
                    </span>
                  </p>
                </div>

                <p className="mb-3 font-body text-sm font-medium text-[#747474] leading-relaxed">
                  {r.desc}
                </p>

                <NavLink
                  to={r.path}
                  className="underline font-body leading-relaxed text-xs dark:text-[#B5935B]"
                >
                  View Details
                </NavLink>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurRooms;