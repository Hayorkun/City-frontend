import { motion } from "framer-motion";
import { Droplet, UtensilsCrossed, Waves, Wifi } from "lucide-react";

const TheExperience = () => {
  const expo = [
    {
      icon: Droplet,
      title: "The Spa",
      desc: "Rejuvenate with treatment inspired by West African botanical and modern wellness rituals.",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      desc: "Seasonal menus blending local flavors with international technique, prepared by our award-winning chefs.",
    },
    {
      icon: Waves,
      title: "Infinity Pool",
      desc: "A serene rooftop pool overlooking the city, open to guests from dawn until dusk.",
    },
    {
      icon: Wifi,
      title: "Free Wifi",
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
      y: 30,
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

  const iconVariants = {
    hidden: {
      opacity: 0,
      scale: 0.7,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="px-5 py-10 md:px-10 md:py-15 bg-[#ffffff] dark:bg-[#0a0e12] text-black dark:text-white">
      <div className="max-w-360 mx-auto flex flex-col items-center">

        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={itemVariants}
            className="font-heading md:font-body text-3xl md:text-base md:font-bold font-light leading-relaxed md:text-[#B5935B] mb-3 md:mb-1"
          >
            The Experience
          </motion.p>

          <motion.h2
            variants={itemVariants}
            className="hidden md:block font-heading leading-tight text-5xl"
          >
            More Than a Place to Sleep
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="hidden md:block font-body text-base text-[#9ca3af] mb-2"
          >
            From our spa to our rooftop bar, every detail is crafted to make
            your stay unforgettable
          </motion.p>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-5"
        >
          {expo.map((e) => {
            const Icon = e.icon;

            return (
              <motion.div
                key={e.title}
                variants={itemVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className={`flex flex-col items-center px-3 py-5 rounded-2xl ${
                  e.title === "Free Wifi" ? "md:hidden" : ""
                }`}
              >
                {/* Icon */}
                <motion.span
                  variants={iconVariants}
                  whileHover={{
                    rotate: 360,
                    transition: {
                      duration: 0.6,
                      ease: "easeInOut",
                    },
                  }}
                  className="w-15 h-15 rounded-full bg-[#f1efea] flex items-center justify-center mb-3"
                >
                  <Icon
                    className="text-[#B5935B] size-6"
                  />
                </motion.span>

                {/* Title */}
                <h4 className="text-xl md:text-3xl font-heading font-medium leading-tight mb-3">
                  {e.title}
                </h4>

                {/* Description */}
                <p className="hidden md:block text-center text-sm leading-relaxed">
                  {e.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TheExperience;