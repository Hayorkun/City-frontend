import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import BookingBar from "./BookingBar";

const Hero = () => {
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
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 1.05,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut",
      },
    },
  };

  const bookingVariants = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.5,
        ease: "easeOut",
      },
    },
  };

  const heroImage = {
    src: "https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_820,h_547,c_fill/Roomview.png",

    srcSet: `
      https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_480,h_320,c_fill/Roomview.png 480w,
      https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_820,h_547,c_fill/Roomview.png 820w,
      https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/Roomview.png 1200w
    `,
  };

  return (
    <section className="md:px-10 bg-[#f1efea] dark:bg-[#0a0e12] min-h-0 md:min-h-screen w-full text-black dark:text-white">
      {/* DESKTOP */}
      <div className="hidden md:block max-w-360 mx-auto">
        <div className="flex items-start py-25 gap-12 mb-10">
          {/* TEXT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-2.5 flex-[45%] flex flex-col"
          >
            <motion.p
              variants={itemVariants}
              className="text-base font-bold font-body text-[#B5935B]"
            >
              Lagos, Nigeria
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="font-heading font-bold text-7xl max-w-lg leading-tight tracking-normal"
            >
              A Quiet Place in the Heart of the City
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-base font-light leading-relaxed max-w-md mb-8"
            >
              CityLounge is a boutique hotel offering signature suites, fine
              dining and thoughtful service for those who seek comfort and
              elegance.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex items-center gap-5"
            >
              <NavLink
                to="/rooms"
                className="bg-black dark:bg-[#967e56] text-[#f9f8f6] dark:text-white rounded-xs px-6 py-2 text-sm font-body leading-relaxed"
              >
                Explore Rooms
              </NavLink>

              <button className="border border-black dark:border-[#967e56] text-black dark:text-[#f9f8f6] rounded-xs px-6 py-2 text-sm font-body leading-relaxed"
              >
                Our Story
              </button>
            </motion.div>
          </motion.div>

          {/* DESKTOP IMAGE */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.01,
              transition: {
                duration: 0.5,
              },
            }}
            className="flex flex-[55%] w-full aspect-3/2 overflow-hidden"
          >
            <img
              src={heroImage.src}
              srcSet={heroImage.srcSet}
              sizes="(max-width: 768px) 100vw, 806px"
              alt="Room view at CityLounge"
              className="object-cover w-full h-full"
              fetchPriority="high"
              loading="eager"
            />
          </motion.div>
        </div>

        {/* BOOKING BAR */}
        <motion.div
          variants={bookingVariants}
          initial="hidden"
          animate="visible"
        >
          <BookingBar />
        </motion.div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden w-full bg-[#f1efea] dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative min-h-[calc(100svh-9rem)] w-full overflow-hidden"
        >
          {/* MOBILE HERO IMAGE */}
          <img
            src={heroImage.src}
            srcSet={heroImage.srcSet}
            sizes="100vw"
            alt="Room view at CityLounge"
            fetchPriority="high"
            loading="eager"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />

          {/* DARK GRADIENT */}
          <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" />

          {/* MOBILE CONTENT */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative z-10 min-h-[calc(100svh-9rem)] flex flex-col justify-end px-5 pb-10"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-bold font-body text-white mb-3"
            >
              Lagos, Nigeria
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-white font-heading font-bold text-4xl sm:text-5xl max-w-lg leading-tight tracking-normal"
            >
              A Quiet Place in the Heart of the City
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-sm text-white/90 leading-relaxed mt-4 max-w-sm"
            >
              Signature suites, fine dining and thoughtful service in the heart
              of Lagos.
            </motion.p>

            <motion.div variants={itemVariants}>
              <NavLink
                to="/rooms"
                className="inline-block mt-5 bg-white text-black rounded-xs px-5 py-2.5 text-sm font-body font-semibold"
              >
                Explore Rooms
              </NavLink>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* MOBILE BOOKING BAR */}
        <motion.div
          variants={bookingVariants}
          initial="hidden"
          animate="visible"
        >
          <BookingBar />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;