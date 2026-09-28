import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { NavLink } from "react-router-dom";

const TheDining = () => {
  const Dine = {
    title: "Flavors of the Coast",
    desc: "Our restaurant celebrates the richness of Nigerian cuisine reimagined on the plate. Fresh seafood, locally sourced produce, and a curated wine list make every meal an occasion.",
    info: [
      "Open for breakfast, lunch and dinner",
      "In-room dining available 24 hours",
      "Private dining for up to 20 guests",
    ],
    path: "/dining",
  };

  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: "easeOut",
      },
    },
  };

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
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="md:block px-5 md:px-10 py-10 md:py-15 bg-[#f9f8f6] dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-360 mx-auto flex flex-col-reverse md:flex-row items-center gap-8">

        {/* Image */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          whileHover={{
            scale: 1.01,
            transition: {
              duration: 0.4,
            },
          }}
          className="md:flex md:flex-[55%] aspect-3/2 overflow-hidden"
        >
          <motion.img
            src="https://res.cloudinary.com/liqslijz/image/upload/f_auto,q_auto,w_1200,h_800,c_fill/gen_cd7ab934c4_af4f37c47be0196a.jpg"
            alt="Dining room image"
            className="w-full h-full object-cover"
            loading="lazy"
            fetchPriority="low"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="md:flex md:flex-[45%]"
        >
          <div>
            <motion.p
              variants={itemVariants}
              className="text-sm md:text-base font-body font-medium leading-relaxed text-[#B5935B] mb-1"
            >
              Dining
            </motion.p>

            <motion.h4
              variants={itemVariants}
              className="font-heading leading-tight text-3xl md:text-5xl font-light mb-2"
            >
              {Dine.title}
            </motion.h4>

            <motion.p
              variants={itemVariants}
              className="text-sm font-body leading-relaxed max-w-md mb-5"
            >
              {Dine.desc}
            </motion.p>

            {/* Dining Info */}
            <motion.div
              variants={itemVariants}
              className="mb-10"
            >
              {Dine.info.map((i) => (
                <motion.p
                  key={i}
                  variants={itemVariants}
                  className="flex gap-2 mb-3 items-center text-sm font-body tracking-tight leading-relaxed"
                >
                  <Check className="size-5 text-[#B5935B]" />
                  {i}
                </motion.p>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <NavLink
                to={Dine.path}
                className="inline-block px-3 py-1.5 text-sm bg-black text-white dark:bg-[#B5935B] rounded-sm hover:opacity-90 transition-opacity duration-150"
              >
                View Menu
              </NavLink>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheDining;